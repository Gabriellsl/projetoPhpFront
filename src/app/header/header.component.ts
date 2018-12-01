import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

   nome :string;
   logado :boolean;


  constructor(
    private loginService: LoginService,
    private router:Router
    ) { }

  
  ngOnInit() {
    this.nome = this.getActualUser();
    this.logado = this.isLogado();
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
    this.loginService.logout();
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
