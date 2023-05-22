import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { member } from './entities/member';
//import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class loginService {
  constructor() {
    

  }

  public currentMember: number = 0;
  membername: string = "";
  memberpw: string = "";
  responsedata: number = 0;

  login() {
    fetch('http://localhost:1337/api/members?filters[name][$eq]=' + this.membername, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        if (data.data.length == 0) {
          window.alert("username does not exist please register");
        } else {
          if(data.data[0].attributes.pw==this.memberpw){
            this.currentMember=data.data[0].id;
            localStorage.setItem('currentMember',data.data[0].id)
            console.log(this.currentMember);
            //location.href = "./stocks";
          }else{window.alert("wrong password please try again")}
        }
      })
  }

  register() {
    this.findMember(this.membername);
  }

  createMember(): any {

    fetch('http://localhost:1337/api/members', {
      method: 'POST',
      body: JSON.stringify({ data: { name: this.membername, pw: this.memberpw } }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())

    window.alert("registered");

  }

  findMember(name: string) {
    fetch('http://localhost:1337/api/members?filters[name][$eq]=' + name, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        if (data.data.length == 0) {
          this.createMember()
        } else {
          window.alert("username already exists");
        }
      })



  }
}
  /* stockList: stock[] = [];
stockDataSource = new MatTableDataSource();
amount_choice: number = 1;
ingredient_choice: any ;
unit_choice:string ="pieces";

constructor() {}
//('http://localhost:1337/api/stocks?filters\[ingredient\][name][$contains]=bier&populate=*', 
findStock():any {
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
    ingredientname: stock.attributes.ingredient.data.attributes.name,
    unit:stock.attributes.unit
  });
}
this.stockDataSource.data = this.stockList;
console.log(this.stockList);
});
}

 

createStock(){
let amount = document.getElementById('ingredient_choice') as HTMLInputElement | null;
//const value:number = amount?.value; 
 
fetch('http://localhost:1337/api/stocks', {
method: 'POST',
body: JSON.stringify({data: {amount : this.amount_choice, member: 1, ingredient: this.ingredient_choice, unit:this.unit_choice}}),
headers: {
    'Content-Type': 'application/json',
  }
})
.then(res => res.json())
.then(this.findStock())
 

}
*/

