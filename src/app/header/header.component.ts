import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

   nome = this.getActualUser();
   logado = this.isLogado();


  constructor(private loginService: LoginService) { }

  
  ngOnInit() {
    console.log('Component app-header iniciado..');
  }

  private getActualUser(){
    if(localStorage.getItem('currentUser') == null)
      return "Bem vindo";
    
      return JSON.parse(localStorage.getItem('currentUser'))['user']['nome'];
  }

  private isLogado(){
    
    if(localStorage.getItem('currentUser'))
      return true;
    return false;
  }
  
  logout(): void {
    var token = JSON.parse( localStorage.getItem('currentUser'));
    this.loginService.logout(token['token']);
    localStorage.clear();
  }

}
