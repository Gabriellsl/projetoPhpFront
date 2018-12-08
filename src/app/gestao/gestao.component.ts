import { Component, OnInit } from '@angular/core';
import { GestaoService } from '../services/gestao.service';
import { Acao } from '../model/acao';
import { Router } from '@angular/router';
import { Permission } from '../permission_controll';

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.component.html',
  styleUrls: ['./gestao.component.css']
})
export class GestaoComponent implements OnInit {

  constructor( 
    private gestaoService:GestaoService,
    private router: Router) { }

  ngOnInit() {
    Permission.execute(this.router)
  }

  
}
