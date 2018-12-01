import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SelectItem } from 'primeng/api';
import { DadosAPI1 } from '../model/dadosAPI1';
import { MinhasacoesService } from '../services/minhasacoes.service';
import { Acao } from '../model/acao';

@Component({
  selector: 'app-grafico-minha-acoes',
  templateUrl: './grafico-minha-acoes.component.html',
  styleUrls: ['./grafico-minha-acoes.component.css']
})
export class GraficoMinhaAcoesComponent implements OnInit {

  constructor(
    private minhasAcoesService: MinhasacoesService
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
  quantidadeAcoes = 0;     // Coleta a quantidade de ações que serão compradas.
  valorAcaoSelecionada = 0;           // valor total da compra ! 
  datasets:any = new Array();
  minhasAcoes: Acao[] = new Array();
  
  acao:Acao={
    id_acao: 0,
    id_gestor: 0,
    valorvenda : 0,
    descricao: "",
    tipo: '',
    rendimento: 0,
    status: "",
    valorcompra: 0,
    datacompra: "",
    datavenda: '',
  }

  ngOnInit() {
    
    
    this.acoes.push("BIDU","MSFT","SNE","XIACY");
    this.findData();
    this.acaoSelecionada = this.acoesCompra[0]["code"];
    
    
  }

  valorAcaoUpdate(){
    try {
      if(this.acaoSelecionada["code"] == "BIDU"){
        this.valorAcaoSelecionada = 10;
      }else if(this.acaoSelecionada["code"] == "MSFT"){
        this.valorAcaoSelecionada = 3;
      }else if(this.acaoSelecionada["code"] == "SNE"){
        this.valorAcaoSelecionada = 20;
      }else if(this.acaoSelecionada["code"] == "XIACY"){
        this.valorAcaoSelecionada = 50;
      }
    } catch (error) {
      
    }
    
  }


  findData(){
    //this.acao.descricao = "BIDU"
    this.minhasAcoesService.findData(this.acao).subscribe(
     (x) => {
       console.log(x)
       for (let index = 0; index < x['config']['dados']; index++) {
         this.minhasAcoes.push(x['dados'][index]);
         
       }
   },
   err=>console.log("Erro em grafico minhas ações")
   )
 }

 private venderAcao(){
    this.acao.descricao = "XIACY";
    this.acao.status = "ATIVO";

    this.minhasAcoesService.venderAcao(this.acao, this.quantidadeAcoes).subscribe(
      x=>console.log(x)
    )
 }

  
}
