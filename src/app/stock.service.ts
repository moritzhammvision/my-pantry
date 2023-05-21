import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { stock } from './entities/stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  stockList: stock[] = [];
  stockDataSource = new MatTableDataSource();

  constructor() {}
  
  findStock() {
    this.stockList.length = 0;
    fetch('http://localhost:1337/api/stocks?populate=*', {
      method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
    })
      .then((response) => response.json())
      .then((data) => {
        for (const stock of data.data) {
          this.stockList.push({
            id: stock.id,
            amount: stock.attributes.amount,
            userid: stock.attributes.member.data.id,
            ingredientname: stock.attributes.ingredient.data.attributes.name
          });
        }
        this.stockDataSource.data = this.stockList;
        console.log(this.stockList);
      });
  }

 /*  createStock(){

    fetch('http://localhost:1337/api/stocks', {
      method: 'POST',
      body: JSON.stringify({data: {amount : 22, member:1, ingredient:1 }}),
        headers: {
            'Content-Type': 'application/json',
          }
      })
    .then(res => res.json())
    .then(console.log)
    this.findStock();

  }  */

  createStock(){
    let amount = document.getElementById('ingredient_choice') as HTMLInputElement | null;
    const value:number = amount?.value; 
    fetch('http://localhost:1337/api/stocks', {
      method: 'POST',
      body: JSON.stringify({data: {amount : 4, member: 1, ingredient: value }}),
        headers: {
            'Content-Type': 'application/json',
          }
      })
    .then(res => res.json())
    .then(console.log)
    this.findStock();

  }

}
