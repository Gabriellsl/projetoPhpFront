import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';
import { LoginService } from '../services/login.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login: Login = {
    login : '',
    password : ''
  };

  
  constructor(private loginService: LoginService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {

  }

  logar(): void {
    this.loginService.autenticar(this.login).subscribe(x => {

    localStorage.setItem('currentUser', JSON.stringify({
                                              "token":x["token"],
                                              "user":x["user"]
                                            }));
    

    },
    err=> alert("Erro no login"));
    
  }



}