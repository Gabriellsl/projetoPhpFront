import { Component, OnInit } from '@angular/core';
import { GestaoService } from '../services/gestao.service';
import { Acao } from '../model/acao';
import { Router } from '@angular/router';
import { Permission } from '../permission_controll';
import { Gestor } from '../model/gestor';

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.component.html',
  styleUrls: ['./gestao.component.css']
})
export class GestaoComponent implements OnInit {

  meta:Number = 0;
  fundoAtual:Number = 0;
  lucroAtual:Number = 0;



  constructor( 
    private gestaoService:GestaoService,
    private router: Router) { }

  ngOnInit() {
    //Permission.execute(this.router)
    this.dadosGestor();
  }

  dadosGestor(){
    this.gestaoService.dadosGestor().subscribe(
      x=>{
        
        this.meta = x['meta'];
        this.fundoAtual = x['fundoatual'];
        this.lucroAtual = x['lucroatual'];
            
      }
    );
  }
  
}
