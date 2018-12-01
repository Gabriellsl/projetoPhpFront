import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { GraficoService } from '../services/grafico.service';
import { DadosAPI1 } from '../model/dadosAPI1';
import {SelectItem} from 'primeng/api'; // para tabela de compra de ações
import { Acao } from '../model/acao';
import { GestaoService } from '../services/gestao.service';



@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  

  constructor(
    private graficoService: GraficoService,
    private gestaoService: GestaoService
    ) {
    this.acoesCompra = [
      {label:'Selecione...', value:null},
      {label:"BAEDU",value:{id:1, name: 'BIDU', code: 'BIDU'}},
      {label:"MICROSOFT",value:{id:2, name: 'MSFT', code: 'MSFT'}},
      {label:"SONY",value:{id:3, name: 'SNE', code: 'SNE'}},
      {label:"XIOMI",value:{id:4, name: 'XIACY', code: 'XIACY'}}
    ];
    
   }


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
  acoesCompra: SelectItem[];   // Array de ações para comprar
  acaoSelecionada: string;     // utilizada pelo combobox para receber o nome da ação.
  quantidadeAcoes: number;     // Coleta a quantidade de ações que serão compradas.
  valorAcaoSelecionada: number           // valor total da compra ! 

  acaoCompra: Acao={
    id_acao: 0,
    id_gestor: 0,
    valorvenda : 0,
    descricao: '',
    tipo: '',
    rendimento: 0,
    status: 'ATIVO',
    valorcompra: 0,
    datacompra: '',
    datavenda: ''
  };

  ngOnInit() {
    
    this.acoes.push("BIDU","MSFT","SNE","XIACY");
    this.startGrafico();
    this.findData1(this.acoes[0]);   
    this.acaoSelecionada = this.acoesCompra[0]["code"];
    
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
    this.data.update();
    this.findData2(this.acoes[1]);
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
       this.data.update();
       this.findData3(this.acoes[2]);
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
     this.data.update();
     this.findData4(this.acoes[3]);
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
     this.data.update();
     setInterval(x=>this.findData1(this.acoes[0]), 500000);
 })
}


private selecionarAcao(){
  
  this.acaoCompra.descricao = "this.acaoSelecionada";
  this.acaoCompra.valorcompra = 5;

}

valorAcaoUpdate(){
  try {
    if(this.acaoSelecionada["code"] == "BIDU"){
      this.valorAcaoSelecionada = this.data1["30"];
    }else if(this.acaoSelecionada["code"] == "MSFT"){
      this.valorAcaoSelecionada = this.data2["30"];
    }else if(this.acaoSelecionada["code"] == "SNE"){
      this.valorAcaoSelecionada = this.data3["30"];
    }else if(this.acaoSelecionada["code"] == "XIACY"){
      this.valorAcaoSelecionada = this.data4["30"];
    }
  } catch (error) {
    
  }
  
}

//"BIDU","MSFT","SNE","XIACY

public comprarAcao(){
  this.selecionarAcao();
  var qtd = 5;
  this.gestaoService.comprarAcao(this.acaoCompra, qtd).subscribe(
    x=>console.log(x)
  )
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


//   findDataUpdate1(acao1:string){
    
//     this.graficoService.findData(acao1).subscribe(
//      (x) => {
      
//         this.data1 = new Array();

//          for(var y in x['Time Series (1min)']){
//            this.data1.push(x['Time Series (1min)'][y]["1. open"]);
//            this.labels.push("");
//        }
//        this.data.update();
//    })
//  }

//  findDataUpdate2(acao2:string){
    
//   this.graficoService.findData(acao2).subscribe(
//    (x) => {
    
//       this.data2 = new Array();

//        for(var y in x['Time Series (1min)']){
//          this.data2.push(x['Time Series (1min)'][y]["1. open"]);
//          this.labels.push("");
//      }
//      this.data.update();
//  })
// }

// findDataUpdate3(acao3:string){
    
//   this.graficoService.findData(acao3).subscribe(
//    (x) => {
    
//       this.data3 = new Array();

//        for(var y in x['Time Series (1min)']){
//          this.data3.push(x['Time Series (1min)'][y]["1. open"]);
//          this.labels.push("");
//      }
//      this.data.update();
//  })
// }

// findDataUpdate4(acao4:string){
    
//   this.graficoService.findData(acao4).subscribe(
//    (x) => {
    
//       this.data4 = new Array();

//        for(var y in x['Time Series (1min)']){
//          this.data4.push(x['Time Series (1min)'][y]["1. open"]);
//          this.labels.push("");
//      }
//      this.data.update();
//  })
// }



//   teste(evt:Event){
//     console.log(evt);
//   }

  
}

