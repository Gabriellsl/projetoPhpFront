import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

   nome = this.getActualUser();


  constructor(private loginService: LoginService) { }

  
  ngOnInit() {
    console.log('Component app-header iniciado..');
  }

  private getActualUser(){
    if(localStorage.getItem('currentUser') == null)
      return "Bem vindo";
    
      return JSON.parse(localStorage.getItem('currentUser'))['user']['nome'];
  }

  exit(): void {
    this.loginService.logout();
    localStorage.removeItem('currentUser');
  }

}
