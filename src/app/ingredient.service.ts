import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ingredient } from './entities/ingredient';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  ingredientList: Ingredient[] = [];
  ingredientDataSource = new MatTableDataSource();

  constructor() {}

  findIngredients() {
    this.ingredientList.length = 0;
    fetch('http://localhost:1337/api/ingredients?populate=*', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        for (const ingredient of data.data) {
          this.ingredientList.push({
            id: ingredient.id,
            name: ingredient.attributes.name,
            unit: ingredient.attributes.unit,
          });
        }
        this.ingredientDataSource.data = this.ingredientList;
        console.log(this.ingredientList);
      });

  }


}
