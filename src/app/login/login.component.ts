import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';
import { LoginService } from '../services/login.service';

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
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  logar(): void {
    this.loginService.autenticar(this.login).subscribe(x => {
      // x é o json devolvido do php ao enviarmos um usuario
      // se x['token']!='' redirecione para /home do usuario x['user']['tipo'] e armazene o token no localStorage
      
      localStorage.setItem('currentUser', JSON.stringify({
                                              "token":x["token"],
                                              "user":x["user"]
                                            }));
                                            

      

      // senão envie uma mensagem de erro na tela, e permaneça no login

      // redirect to /homeINV
      // redirect to /homeADM
    });
    
  }



}
