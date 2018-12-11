import { Component, OnInit } from '@angular/core';
import { GestaoService } from '../services/gestao.service';
import { Acao } from '../model/acao';
import { Router } from '@angular/router';
import { Permission } from '../permission_controll';
import { Gestor } from '../model/gestor';
import { GraficoService } from '../services/grafico.service';
import { DadosAPI1 } from '../model/dadosAPI1';
import { SelectItem } from 'primeng/api';
import * as Chart from 'chart.js';
import { MinhasacoesService } from '../services/minhasacoes.service';

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.component.html',
  styleUrls: ['./gestao.component.css']
})
export class GestaoComponent implements OnInit {

  meta: Number = 0;
  fundoAtual: Number = 0;
  lucroAtual: Number = 0;
  



  constructor(
    private gestaoService: GestaoService,
    private router: Router,
    // GRAFICO MINHAS ACOES
    private graficoService: GraficoService,
    private minhasAcoesService: MinhasacoesService,
  ) {

    // GRAFICO
    this.acoesCompra = [
      { label: 'Selecione...', value: null },
      { label: "BAEDU", value: { id: 1, name: 'BIDU', code: 'BIDU' } },
      { label: "MICROSOFT", value: { id: 2, name: 'MSFT', code: 'MSFT' } },
      { label: "SONY", value: { id: 3, name: 'SNE', code: 'SNE' } },
      { label: "XIOMI", value: { id: 4, name: 'XIACY', code: 'XIACY' } }
    ];

    // GRAFICO MINHAS ACOES
    this.acoesVenda = [
      { label: 'Selecione...', value: null },
      { label: "BAEDU", value: { id: 1, name: 'BIDU', code: 'BIDU' } },
      { label: "MICROSOFT", value: { id: 2, name: 'MSFT', code: 'MSFT' } },
      { label: "SONY", value: { id: 3, name: 'SNE', code: 'SNE' } },
      { label: "XIOMI", value: { id: 4, name: 'XIACY', code: 'XIACY' } }
    ];


  }








  // GRAFICO
  data: Chart;
  dados: DadosAPI1[];// = new Array();
  dadosAPI: DadosAPI1[];
  data1: number[] = new Array();
  data2: number[] = new Array();
  data3: number[] = new Array();
  data4: number[] = new Array();
  data5: number[] = new Array();
  labels: string[] = new Array();
  promise: any;
  contador: number;
  acoes: string[] = new Array();
  acoesCompra: SelectItem[];   // Array de ações para comprar
  acaoSelecionada: string;     // utilizada pelo combobox para receber o nome da ação.
  quantidadeAcoes = 1;     // Coleta a quantidade de ações que serão compradas.
  valorAcaoSelecionada = 0;           // valor total da compra ! 
  statusOperacaoCompra = true;



  acaoCompra: Acao = {
    id_acao: 0,
    id_gestor: 0,
    valorvenda: 0,
    descricao: '',
    tipo: '',
    rendimento: 0,
    status: 'ATIVO',
    valorcompra: this.valorAcaoSelecionada,
    datacompra: null,
    datavenda: null
  };

  // GRAFICO MINHAS ACOES
  minhasAcoes: Acao[] = new Array();
  acoesVenda: SelectItem[];
  acaoSelecionadaVenda: string;
  quantidadeAcoesVenda = 1;
  valorAcaoSelecionadaVenda = 0;

  acao: Acao = {
    id_acao: 0,
    id_gestor: 0,
    valorvenda: 0,
    descricao: "",
    tipo: '',
    rendimento: 0,
    status: "ATIVO",
    valorcompra: 0,
    datacompra: null,
    datavenda: null,
  } 
  acao2: Acao = {
    id_acao: 0,
    id_gestor: 0,
    valorvenda: 0,
    descricao: "",
    tipo: '',
    rendimento: 0,
    status: "ATIVO",
    valorcompra: 0,
    datacompra: null,
    datavenda: null,
  }

  




  ngOnInit() {
    if(Permission.execute(this.router)){
      this.dadosGestor();


    // GRÁFICO

    this.acoes.push("BIDU", "MSFT", "SNE", "XIACY");
    this.startGrafico();

    this.findData1(this.acoes[0]);
    this.acaoSelecionada = this.acoesCompra[0]["code"];


    // // GRAFICO MINHAS ACOES
    this.acoes.push("BIDU", "MSFT", "SNE", "XIACY");
    this.findData();
    this.acaoSelecionada = this.acoesVenda[0]['code'];

    }
    
}

  dadosGestor() {
    this.gestaoService.dadosGestor().subscribe(
      x => {

        this.meta = x['meta'];
        this.fundoAtual = x['fundoatual'];
        this.lucroAtual = x['lucroatual'];

      }
    );
  }









  // GRÀFICO


  startGrafico() {

    this.data = new Chart('pie', {
      type: 'line',

      data: {
        labels: this.labels,

        datasets: [{
          label: '1. BIDU',
          data: this.data1,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
        },
        {
          label: '2. MSFT',
          data: this.data2,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        },
        {
          label: "3. SNE",
          data: this.data3,
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        },
        {
          label: "4. XIANCY",
          data: this.data4,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
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

  findData1(acao1: string) {

    this.data1 = [];
    this.data2 = [];
    this.data3 = [];
    this.data4 = [];
    this.labels = [];


    this.graficoService.findData(acao1).subscribe(
      (x) => {
        let i = 0;
        for (var y in x['Time Series (5min)']) {
          this.data1.push(x['Time Series (5min)'][y]["1. open"]);
          this.labels.push("");
          if (i == 30) break;
          i++;
        }
      })
    this.data.update();
    this.findData2(this.acoes[1]);
  }

  findData2(acao2: string) {
    this.graficoService.findData(acao2).subscribe(
      (x) => {
        let i = 0;
        for (var y in x['Time Series (5min)']) {
          this.data2.push(x['Time Series (5min)'][y]["1. open"]);
          if (i == 30) break;
          i++;
        }
        this.data.update();
        this.findData3(this.acoes[2]);
      })
  }

  findData3(acao3: string) {
    this.graficoService.findData(acao3).subscribe(
      (x) => {
        let i = 0;
        for (var y in x['Time Series (5min)']) {
          this.data3.push(x['Time Series (5min)'][y]["1. open"]);
          if (i == 30) break;
          i++;
        }
        this.data.update();
        this.findData4(this.acoes[3]);
      })
  }

  findData4(acao4: string) {
    this.graficoService.findData(acao4).subscribe(
      (x) => {
        let i = 0;
        for (var y in x['Time Series (5min)']) {
          this.data4.push(x['Time Series (5min)'][y]["1. open"]);
          if (i == 30) break;
          i++;
        }
        this.data.update();
        this.startGrafico();
        setInterval(x => this.findData1(this.acoes[0]), 500000);
        this.valorAcaoUpdateVenda();
      })
  }

  valorAcaoUpdate() {
    try {
      if (this.acaoSelecionada["code"] == "BIDU") {
        this.valorAcaoSelecionada = this.data1["30"];
      } else if (this.acaoSelecionada["code"] == "MSFT") {
        this.valorAcaoSelecionada = this.data2["30"];
      } else if (this.acaoSelecionada["code"] == "SNE") {
        this.valorAcaoSelecionada = this.data3["30"];
      } else if (this.acaoSelecionada["code"] == "XIACY") {
        this.valorAcaoSelecionada = this.data4["30"];
      }
    } catch (error) {

    }

  }

  

  //"BIDU","MSFT","SNE","XIACY

  public comprarAcao() {

    if (this.acaoSelecionada == this.acoesCompra[0]["code"]) {
      alert("Selecione uma ação!")
      return;
    }

    this.valorAcaoUpdate();
    this.acaoCompra.valorcompra = this.valorAcaoSelecionada;
    this.acaoCompra.status = 'ATIVO';
    this.acaoCompra.descricao = this.acaoSelecionada["code"];

    //this.statusOperacaoCompra = true

    for (let i = 0; i < this.quantidadeAcoes; i++) {

      var tmp = this.acaoCompra;

      this.gestaoService.comprarAcao(tmp, this.quantidadeAcoes).subscribe(
        z => {
            console.log(z[0])
            this.minhasAcoes.push(z[0]);
          
          this.statusOperacaoCompra = true
        },
        err => this.statusOperacaoCompra = false);
    }

    if (this.statusOperacaoCompra)
      alert("Sucesso na compra!");
    else
      alert("Erro na compra!")
  }




  // GRAFICO MINHAS ACOES

  valorAcaoUpdateVenda() {
    try {
      if (this.acaoSelecionadaVenda["code"] == "BIDU") {
        this.valorAcaoSelecionadaVenda = this.data1["30"];
      } else if (this.acaoSelecionadaVenda["code"] == "MSFT") {
        this.valorAcaoSelecionadaVenda = this.data2["30"];
      } else if (this.acaoSelecionadaVenda["code"] == "SNE") {
        this.valorAcaoSelecionadaVenda = this.data3["30"];
      } else if (this.acaoSelecionadaVenda["code"] == "XIACY") {
        this.valorAcaoSelecionadaVenda = this.data4["30"];
      }
    } catch (error) {

    }

  }

  findData() {
    
    this.minhasAcoesService.findData(this.acao2).subscribe(
      (x) => {
        this.minhasAcoes = new Array();
        console.log(x);
        x.forEach(y => {
          this.minhasAcoes.push(y);
        });
      },
      err => console.log("Erro em grafico minhas ações")
    )
  }

  venderAcao() {

    if (this.acaoSelecionadaVenda == this.acoesVenda[0]["code"]) {
      alert("Selecione uma ação!")
      return;
    }

    this.acao.descricao = this.acaoSelecionadaVenda['name'];
    this.acao.valorvenda = this.valorAcaoSelecionadaVenda;

    this.acao.valorcompra = null;
    for (let i = 0; i < this.quantidadeAcoesVenda; i++) {
     
      this.minhasAcoesService.venderAcao(this.acao, this.quantidadeAcoesVenda).subscribe(
        z=>{
          this.findData();
          this.dadosGestor();

        },
        err => alert("Não existem ações nesta categoria!!!")
      )
      
    }
  }

}