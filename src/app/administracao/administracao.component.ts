import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CruddefaultService } from '../services/cruddefault.service';
import { Gestor } from '../model/gestor';
import { Investidor } from '../model/investidor';
import { Administrador } from '../model/administrador';

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.css']
})
export class AdministracaoComponent implements OnInit {

  constructor(
    private router:Router,
    private crudDefautService:CruddefaultService
  ) {
    this.listaInvestidores = [
      {label:'Selecione...', value:null},
      {label:"Bob",value:{id:1, name: 'bob', code: 'test1'}},
      {label:"Toshiro",value:{id:2, name: 'toshi', code: 'test2'}},
      {label:"Nobunaga",value:{id:3, name: 'nobu', code: 'test3'}},
      {label:"Zizao",value:{id:4, name: 'zi', code: 'test4'}},
      {label:"Bil",value:{id:4, name: 'bil', code: 'test5'}}
    ];

    this.listaGestores = [
      {label:'Selecione...', value:null},
      {label:"Bob",value:{id:1, name: 'bob', code: 'test1'}},
      {label:"Toshiro",value:{id:2, name: 'toshi', code: 'test2'}},
      {label:"Nobunaga",value:{id:3, name: 'nobu', code: 'test3'}},
      {label:"Zizao",value:{id:4, name: 'zi', code: 'test4'}},
      {label:"Bil",value:{id:4, name: 'bil', code: 'test5'}}
    ];
   }
  
  listaInvestidores: SelectItem[];
  listaGestores: SelectItem[];
  data: Chart;
  invSelecionado: string;
  gesSelecionado: string;
  numGestor:number = 0;
  numAdministrador:number = 0;
  numInvestidor:number = 0;

  gestor:Gestor = {
    id_gestor :0,
    id_pessoa :0,
    meta      :0,
    giromaximo:0,
  }

   administrador:Administrador={
    id_administrador    :0,
    id_pessoa    :0
   }

   investidor:Investidor={
    id_investidor :0,
    id_pessoa     :0,
    saldo         :0
   }

  ngOnInit() {
    this.startGrafico();
    // this.numeroAdministrador();
    // this.numeroGestor();
    this.numeroInvestidor();
    
  }

startGrafico(){
    this.data = new Chart ('grafico_adm', {
      type:'line',
      
      data:{
        labels: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
        
        datasets: [{
              label: 'Ganhos totais',
              data: [4000,5500,6300,7100,1000,16100,2900,7800,3960,18000],
              backgroundColor:'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1
          }
        ],
      },     
    })
  }

  buscarInvestidor(){
    console.log(this.invSelecionado);
  }

  buscarGestor(){
    console.log(this.gesSelecionado);
  }

  numeroGestor(){
    this.crudDefautService.findAll(new Gestor(), 'Gestor').subscribe(
      x =>
        x.foreach(
          y=>this.numGestor+=1
        )
    )
  }
  numeroInvestidor(){
    this.crudDefautService.findAll(new Investidor(), 'Investidor').subscribe(
      x =>{
      console.log(x);
        x.foreach(
          y=>this.numInvestidor+=1
        )}
    )
  }
  numeroAdministrador(){
    this.crudDefautService.findAll(this.administrador, 'Administrador').subscribe(
      x =>
        x.foreach(
          y=>this.numAdministrador+=1
        )
    )
  }

  createUser(){
    alert()
    this.router.navigate(['formulario']);
  }
}
