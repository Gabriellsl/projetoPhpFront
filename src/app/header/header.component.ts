import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

   nome = this.getActualUser();


  constructor() { }

  
  ngOnInit() {
    console.log('Component app-header iniciado..');
  }

  private getActualUser(){
    if(localStorage.getItem('currentUser')==null)
      return "Bem vindo";
    
      return JSON.parse(localStorage.getItem('currentUser'))['user']['nome'];
  }

}
