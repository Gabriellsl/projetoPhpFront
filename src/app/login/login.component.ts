import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
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
              private location: Location, 
              private router: Router) { }

  ngOnInit() {

  }

  logar(): void {
    this.loginService.autenticar(this.login).subscribe(x => {
    if(x["user"]["tipo"]  == "ADM" ){
      this.router.navigate(['formulario']);
    }else if(x["user"]["tipo"] == "INV"){
      this.router.navigate(['investimento']);
    }else if(x["user"]["tipo"] == "GES"){
      this.router.navigate(['grafico']);
    }
    
    localStorage.setItem('currentUser', JSON.stringify({
                                              "token":x["token"],
                                              "user":x["user"]
                                            }));
    

    },
    err=> alert("Erro no login"));
    
  }

  

}