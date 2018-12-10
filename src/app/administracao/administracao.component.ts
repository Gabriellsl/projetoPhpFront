import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CruddefaultService } from '../services/cruddefault.service';
import { Gestor } from '../model/gestor';
import { Investidor } from '../model/investidor';
import { Administrador } from '../model/administrador';
import { Pessoa } from '../model/pessoa';
import { AdministracaoService } from '../services/administracao.service';

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.css']
})
export class AdministracaoComponent implements OnInit {

  constructor(
    private router:Router,
    private crudDefautService:CruddefaultService,
    private administracaoService:AdministracaoService
  ) {
    this.listaInvestidores = [
      {label:'Selecione...', value:null},

    ];

    this.listaGestores = [
      {label:'Selecione...', value:null},
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
  fundo:number = 0;

  pessoa:Pessoa={
    id_pessoa: null,
    nome: null,
    email: null,
    cpf: null,
    rg: null,
    login: null,
    senha: null,
    tipo: null,
  }
  
  ngOnInit() {
    this.startGrafico();
    this.carregarPessoas();
    this.fundoDisponivel();
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

  carregarPessoas(){
    this.crudDefautService.findAll(this.pessoa, 'Pessoa').subscribe(
      x =>
        x.map(
          y=>{
            switch (y['tipo']) {
              case "ADM":{
                this.numAdministrador+=1
              }
              break;
            
              case "INV":{
                this.listaInvestidores.push({label:y['nome'],value:y});
                this.numInvestidor+=1
              }
              break;
              case "GES":{
                this.listaGestores.push({label:y['nome'],value:y});
                this.numGestor+=1
              }
              break;
            

              default:
                break;
            }
          },
          
        )
    )
  }
  

  createUser(){
    this.router.navigate(['formulario']);
  }

  fundoDisponivel(){
    this.administracaoService.fundoDisponivel().subscribe(
      x=>this.fundo = x['total']
    );
  }
}
