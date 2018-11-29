import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DadosAPI1 } from '../model/dadosAPI1';
import { GraficoService } from '../services/grafico.service';

@Component({
  selector: 'app-grafico-minhas-acoes',
  templateUrl: './grafico-minhas-acoes.component.html',
  styleUrls: ['./grafico-minhas-acoes.component.css']
})
export class GraficoMinhaAcoesComponent implements OnInit {

  constructor(private graficoService: GraficoService) { }

  data: Chart;
  dados:DadosAPI1[];// = new Array();
  dadosAPI:DadosAPI1[];
  data1:number[] = new Array();
  data2:number[] = new Array();
  data3:number[] = new Array();
  data4:number[] = new Array();
  data5:number[] = new Array();
  labels:string[] = new Array();
  promise:any;
  contador:number;

  datasets:any = new Array();

  ngOnInit() {
    
    this.findData();

    
  }

  startGrafico(){
    this.data = new Chart ('pie', {
      type:'line',
      
      data:{
        labels: this.labels,
        datasets: this.datasets
      },     
    })
  }

   findData(){
     this.graficoService.findData().subscribe(
      (x) => {
          
        
    })
  }

  findDataUpdate(){
    
    this.graficoService.findData().subscribe(
     (x) => {
      
        
   })
 }
  teste(evt:Event){
    console.log(evt);
  }

  
}
