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
import { Permission } from '../permission_controll';

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
  ganhos : number[] = new Array();


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

  investidor:Investidor={
    id_investidor     :0,
    id_pessoa         :0,
    saldo            :0,
  }

  gestor:Gestor={
    id_gestor    :0,
    id_pessoa    :0,
    meta        :0,
    giromaximo  :0
  }

  nomeI = ""
  emailI = ""
  cpfI = ""
  saldoI = ''

  nomeG = ''
  emailG = ''
  metaG = ''
  capitalG = ''

  ngOnInit() {
    if(Permission.execute(this.router)){
      this.ganhosTotais();
      this.carregarPessoas();
      this.fundoDisponivel();
       
    }
}

startGrafico(){
    this.data = new Chart ('grafico_adm', {
      type:'line',
      
      data:{
        labels: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
        
        datasets: [{
              label: 'Ganhos totais',
              data: this.ganhos,
              backgroundColor:'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1
          }
        ],
      },     
    })
  }

  buscarInvestidor(){
    this.nomeI = this.invSelecionado['nome']; 
    this.emailI = this.invSelecionado['email']; 
    this.cpfI = this.invSelecionado['cpf']; 

    this.crudDefautService.findAll(this.investidor, "Investidor").subscribe(
      x=>{
        x.forEach(y => {
          if(y['id_pessoa'] == this.invSelecionado['id_pessoa'])
            this.saldoI = y['saldo']
        });
      }
    )
  }

  buscarGestor(){
    this.nomeG = this.gesSelecionado['nome']; 
    this.emailG = this.gesSelecionado['email']; 


    this.crudDefautService.findAll(this.gestor, "Gestor").subscribe(
      x=>{
        x.forEach(y => {
          if(y['id_pessoa'] == this.gesSelecionado['id_pessoa']){
            this.metaG = y['meta']
            this.capitalG = y['giromaximo']
          }
            
        });
      }
    )
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
  ganhosTotais(){

    for (let i = 0; i < 12; i++) {
      this.ganhos[i] = 0;
    }

    this.administracaoService.ganhosTotais().subscribe(
      x=> {
        for (const key in x){
          this.ganhos[Number.parseInt(key)-1] = x[key];
        }
        console.log(this.ganhos);
        this.startGrafico(); 
      }
      
    )
  }
}
