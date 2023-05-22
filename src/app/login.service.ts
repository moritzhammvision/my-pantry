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
            location.href = "./stocks";
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
