import { Component, OnInit } from '@angular/core';
import { Login }             from '../model/login';
import { LoginService }      from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login: Login = {
    email:"",
    password:""
  };
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.logar();
  }

  logar(): void{
    const permision = this.loginService.autentica(this.login);
  }
}
