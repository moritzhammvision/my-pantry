import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { stock } from './entities/stock';
import { loginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  stockList: stock[] = [];
  stockDataSource = new MatTableDataSource();
  amount_choice: number = 1;
  ingredient_choice: any ;
  unit_choice:string ="pieces";
  newamount:number=1;

  currentMember = localStorage.getItem('currentMember');

  constructor(public loginService: loginService) {}
  //('http://localhost:1337/api/stocks?filters\[ingredient\][name][$contains]=bier&populate=*', 
  findStock():any {
    console.log(this.loginService.currentMember);
    this.stockList.length = 0;
    fetch('http://localhost:1337/api/stocks?filters\[member\][id][$eq]='+this.currentMember+'&populate=*', {
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
            ingredientname: stock.attributes.ingredient.data.attributes.name,
            unit:stock.attributes.unit
          });
        }
        this.stockDataSource.data = this.stockList;
        console.log(this.stockList);
      });
  }

 delete(id:number){
  fetch('http://localhost:1337/api/stocks/'+id, {
    method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
  }).then((response) => response.json())
  .then(this.findStock())

 }

  createStock(){
    let amount = document.getElementById('ingredient_choice') as HTMLInputElement | null;
    //const value:number = amount?.value; 
  
    fetch('http://localhost:1337/api/stocks', {
      method: 'POST',
      body: JSON.stringify({data: {amount : this.amount_choice, member: this.currentMember, ingredient: this.ingredient_choice, unit:this.unit_choice}}),
        headers: {
            'Content-Type': 'application/json',
          }
      })
    .then(res => res.json())
    .then(this.findStock())
    

  }

  updateAmount(id:number,amountnew:any): void{
    fetch('http://localhost:1337/api/stocks/'+id, {
      method: 'PUT',
      body: JSON.stringify({data: {amount : amountnew}}),
        headers: {
            'Content-Type': 'application/json',
          }
      })
    .then(res => res.json())
    .then(this.findStock())
    

  }

}
