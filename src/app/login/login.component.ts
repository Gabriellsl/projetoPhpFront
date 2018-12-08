import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';


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
              private router: Router,
           ) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      
      var x = JSON.parse(localStorage.getItem('currentUser'))['user'];

      console.log(x)

      if(x["tipo"]  == "ADM" ){
        this.router.navigate(['admnistracao']);
      }else if(x["tipo"] == "INV"){
        this.router.navigate(['investimento']);
      }else if(x["tipo"] == "GES"){
        this.router.navigate(['gestao']);
      }
    }
    
  }

  logar(): void {



    this.loginService.autenticar(this.login).subscribe(x => {
      
    localStorage.setItem('currentUser', JSON.stringify({
                                              "token":x["token"],
                                              "user":x["user"]
                                            }));

    if(x["user"]["tipo"]  == "ADM" ){
      this.router.navigate(['admnistracao']);
    }else if(x["user"]["tipo"] == "INV"){
      this.router.navigate(['investimento']);
    }else if(x["user"]["tipo"] == "GES"){
      this.router.navigate(['gestao']);
    }
    
    },
    err=> alert("Erro no login"));
    
  }

  

}