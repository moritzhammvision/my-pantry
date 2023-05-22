import { Component } from '@angular/core';
import { loginService } from '../login.service';
import { member } from '../entities/member';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(public loginService: loginService) {}

  //x=this.loginService.login(); 
  

  
}
