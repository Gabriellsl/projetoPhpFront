import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { GraficoService } from '../services/grafico.service';
import { DadosAPI1 } from '../model/dadosAPI1';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

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
  
  ngOnInit() {
    
    this.findData();

    
  }

  startGrafico(){
    this.data = new Chart ('pie', {
      type:'line',
      
      data:{
        labels: this.labels,
        
        datasets: [{
              label: '1. open',
              data: this.data1,
              backgroundColor:'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1
          },
            {
              label: '2. high',
              data: this.data2,
              backgroundColor:'rgba(153, 102, 255, 0.2)',
              borderColor:  'rgba(153, 102, 255, 1)',
              borderWidth: 1 
            },
            {
              label: "3. low",
              data: this.data3,
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              borderColor:  'rgba(255, 206, 86, 1)',
              borderWidth: 1 
            },
            {
              label: "4. close",
              data: this.data4,
              backgroundColor:'rgba(75, 192, 192, 0.2)',
              borderColor:  'rgba(75, 192, 192, 1)',
              borderWidth: 1 
            },
            {
              label: "5. volume",
              data: this.data5,
              backgroundColor:'rgba(255, 159, 64, 0.2)',
              borderColor:  'rgba(255, 159, 64, 1)',
              borderWidth: 1 
            }
          
        ],
      },
      options: {
        events:['onHover']
        
      }
      
    })
  }

  findData(){
    this.graficoService.findData().subscribe(
      (x) => {
          for(var y in x['Time Series (5min)']){
            this.data1.push(x['Time Series (5min)'][y]["1. open"]);
            this.data2.push(x['Time Series (5min)'][y]["2. high"]);
            this.data3.push(x['Time Series (5min)'][y]["3. low"]);
            this.data4.push(x['Time Series (5min)'][y]["4. close"]);
            this.data5.push(x['Time Series (5min)'][y]["5. volume"]);
            this.labels.push("");
        }
        
        this.startGrafico();
    })
  }

  teste(evt:Event){
    console.log(evt);
  }
}
