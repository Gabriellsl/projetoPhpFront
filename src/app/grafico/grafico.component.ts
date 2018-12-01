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
  promise:any;
  contador:number;
  acoes:string[] = new Array();


  ngOnInit() {
    
    this.acoes.push("BIDU","MSFT","SNE","XIACY");
    this.startGrafico();
    this.findData1(this.acoes[0]);
    this.findData2(this.acoes[1]);
    this.findData3(this.acoes[2]);
    this.findData4(this.acoes[3]);
    
    
  }

  startGrafico(){
    
    this.data = new Chart ('pie', {
      type:'line',
      
      data:{
        labels: this.labels,
        
        datasets: [{
              label: '1. BIDU',
              data: this.data1,
              backgroundColor:'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1
          },
            {
              label: '2. MSFT',
              data: this.data2,
              backgroundColor:'rgba(153, 102, 255, 0.2)',
              borderColor:  'rgba(153, 102, 255, 1)',
              borderWidth: 1 
            },
            {
              label: "3. SNE",
              data: this.data3,
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              borderColor:  'rgba(255, 206, 86, 1)',
              borderWidth: 1 
            },
            {
              label: "4. XIANCY",
              data: this.data4,
              backgroundColor:'rgba(75, 192, 192, 0.2)',
              borderColor:  'rgba(75, 192, 192, 1)',
              borderWidth: 1 
            }
          
        ],
      },     
    })
  }

/*
  findData(){
    this.graficoService.findData().subscribe(
     (x) => {
       console.log(this.acoes);
       console.log(x);
         for(var y in x['Time Series (5min)']){
           this.data1.push(x['Time Series (5min)'][y]["1. open"]);
           this.data2.push(x['Time Series (5min)'][y]["2. high"]);
           this.data3.push(x['Time Series (5min)'][y]["3. low"]);
           this.data4.push(x['Time Series (5min)'][y]["4. close"]);
           this.data5.push(x['Time Series (5min)'][y]["5. volume"]);
           this.labels.push("");
           console.log(this.data1);
       }
       
       this.startGrafico();
       setInterval(x=>this.findDataUpdate(), 1000*62);
   })
 }

 */

   findData1(acao1:string){
     this.graficoService.findData(acao1).subscribe(
      (x) => {
        let i =0;
          for(var y in x['Time Series (5min)']){
            this.data1.push(x['Time Series (5min)'][y]["1. open"]);
            this.labels.push("");
            if(i==30)break;
            i++;
        }
    })
    this.data.update()
  }

  findData2(acao2:string){
    this.graficoService.findData(acao2).subscribe(
     (x) => {
      let i =0;
         for(var y in x['Time Series (5min)']){
           this.data2.push(x['Time Series (5min)'][y]["1. open"]);
           if(i==30)break;
            i++;
       }
       this.data.update()
   })
 }

 findData3(acao3:string){
  this.graficoService.findData(acao3).subscribe(
   (x) => {
    let i =0;
       for(var y in x['Time Series (5min)']){
         this.data3.push(x['Time Series (5min)'][y]["1. open"]);
         if(i==30)break;
            i++;
     }
     this.data.update()
 })
}

findData4(acao4:string){
  this.graficoService.findData(acao4).subscribe(
   (x) => {
    let i =0;
       for(var y in x['Time Series (5min)']){
         this.data4.push(x['Time Series (5min)'][y]["1. open"]);
         if(i==30)break;
            i++;
     }
     
     this.data.update()
     //setInterval(x=>this.findDataUpdate4(acao4), 1000*100);
 })
}

//   findDataUpdate(acao1:string){
    
//     this.graficoService.findData(acao1).subscribe(
//      (x) => {
      
//         this.data1 = new Array();
//         this.data2 = new Array();
//         this.data3 = new Array();
//         this.data4 = new Array();
//         this.data5 = new Array();
//         this.labels = new Array();

//          for(var y in x['Time Series (1min)']){
//            this.data1.push(x['Time Series (1min)'][y]["1. open"]);
//            this.data2.push(x['Time Series (1min)'][y]["2. high"]);
//            this.data3.push(x['Time Series (1min)'][y]["3. low"]);
//            this.data4.push(x['Time Series (1min)'][y]["4. close"]);
//            this.data5.push(x['Time Series (1min)'][y]["5. volume"]);
//            this.labels.push("");
//        }
//        this.data.update();
//    })
//  }


  findDataUpdate1(acao1:string){
    
    this.graficoService.findData(acao1).subscribe(
     (x) => {
      
        this.data1 = new Array();

         for(var y in x['Time Series (1min)']){
           this.data1.push(x['Time Series (1min)'][y]["1. open"]);
           this.labels.push("");
       }
       this.data.update();
   })
 }

 findDataUpdate2(acao2:string){
    
  this.graficoService.findData(acao2).subscribe(
   (x) => {
    
      this.data2 = new Array();

       for(var y in x['Time Series (1min)']){
         this.data2.push(x['Time Series (1min)'][y]["1. open"]);
         this.labels.push("");
     }
     this.data.update();
 })
}

findDataUpdate3(acao3:string){
    
  this.graficoService.findData(acao3).subscribe(
   (x) => {
    
      this.data3 = new Array();

       for(var y in x['Time Series (1min)']){
         this.data3.push(x['Time Series (1min)'][y]["1. open"]);
         this.labels.push("");
     }
     this.data.update();
 })
}

findDataUpdate4(acao4:string){
    
  this.graficoService.findData(acao4).subscribe(
   (x) => {
    
      this.data4 = new Array();

       for(var y in x['Time Series (1min)']){
         this.data4.push(x['Time Series (1min)'][y]["1. open"]);
         this.labels.push("");
     }
     this.data.update();
 })
}



  teste(evt:Event){
    console.log(evt);
  }

  
}
