import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.css']
})
export class AdministracaoComponent implements OnInit {

  constructor() {
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

  ngOnInit() {
    this.startGrafico();
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

  createUser(){
    alert("Usuario criado !");
  }
}
