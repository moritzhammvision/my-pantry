import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { shopping } from './entities/shopping';

@Injectable({
  providedIn: 'root',
})
export class shoppingService {
  shoppingList: shopping[] = [];
  shoppingDataSource = new MatTableDataSource();
  amount_choice: number = 1;
  ingredient_choice: any ;
  unit_choice:string ="pieces";
  currentMember = localStorage.getItem('currentMember');
  constructor() {}
  
  findshopping() :any {
    this.shoppingList.length = 0;
    fetch('http://localhost:1337/api/shoppinglists?filters\[member\][id][$eq]='+this.currentMember+'&populate=*', {
      method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
    })
      .then((response) => response.json())
      .then((data) => {
        for (const shopping of data.data) {
          this.shoppingList.push({
            id: shopping.id,
            amount: shopping.attributes.amount,
            userid: shopping.attributes.member.data.id,
            ingredientname: shopping.attributes.ingredient.data.attributes.name,
            unit:shopping.attributes.unit
          });
        }
        this.shoppingDataSource.data = this.shoppingList;
        console.log(this.shoppingList);
      });
  }

 /*  createshopping(){

    fetch('http://localhost:1337/api/shoppings', {
      method: 'POST',
      body: JSON.stringify({data: {amount : 22, member:1, ingredient:1 }}),
        headers: {
            'Content-Type': 'application/json',
          }
      })
    .then(res => res.json())
    .then(console.log)
    this.findshopping();

  }  */

  createshopping(){
    
  
    fetch('http://localhost:1337/api/shoppinglists', {
      method: 'POST',
      body: JSON.stringify({data: {amount : this.amount_choice, member: this.currentMember, ingredient: this.ingredient_choice, unit:this.unit_choice}}),
        headers: {
            'Content-Type': 'application/json',
          }
      })
    .then(res => res.json())
    .then(this.findshopping())

  }

  delete(id:number){
    fetch('http://localhost:1337/api/shoppinglists/'+id, {
      method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json',
                  },
    }).then((response) => response.json())
    .then(this.findshopping())  ;
  
   }

}
