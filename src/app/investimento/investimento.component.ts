import { Component, OnInit } from '@angular/core';
import { Transacao } from '../model/transacao';
import { JsonGenerate } from '../JSONS/jsonGenerate';
import { JsonDefault } from '../JSONS/jsonDefault';
import { ConfigUrl } from '../configUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransacaoService } from '../services/transacao.service';
import { TabelaInvestimentosComponent } from '../tabela-investimentos/tabela-investimentos.component';
import { TabelaSacadosComponent } from '../tabela-sacados/tabela-sacados.component';
import {Permission} from '../permission_controll'
import { Router } from '@angular/router';
import {Util} from '../util'

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css']
})

  


export class InvestimentoComponent implements OnInit {

  minDate:Date;

  transacaoDeposito: Transacao = {
    id_transacao: 0,
    id_investidor: 2,
    id_configtaxa:3,
    tipo: '+',
    data: null ,
    valor: null,
    status: 'ATIVO',
    datasaque: null,
  };
  saque: Transacao={
    id_transacao: 0,
    id_investidor: 0,
    id_configtaxa:0,
    tipo: '+',
    data: '',
    valor: 0,
    status: '',
    datasaque: '',
  }

  saldoAtivo:number = 0;

  saldoAtivoFormatado = Util.formatReal(this.saldoAtivo);

  constructor(private http: HttpClient,
              private transacaoService: TransacaoService,
              private router: Router
              ) {}

  ngOnInit(){
    

    if(Permission.execute(this.router)){
      this.calculaSaldoAtivo();

      

      this.minDate = new Date();
      this.minDate.setMonth(this.minDate.getMonth() == 12? 1 : this.minDate.getMonth()+1);
      this.minDate.setFullYear(this.minDate.getMonth() == 12 ? this.minDate.getFullYear()+1: this.minDate.getFullYear());
   }
  
    
  }


  public investir(): /*Observable<TransacaoDeposito>*/void {

    
    if(this.transacaoDeposito.datasaque == null || this.transacaoDeposito.valor==null){
      alert("Prencha os campos requeridos");
      return ;
    }
      
    
    console.log(this.transacaoDeposito.datasaque);
      this.transacaoService.insertTransacao(this.transacaoDeposito).subscribe(
        x => {
          console.log(x);
        },
        err => {
          
        }
      );

  }

  public calculaSaldoAtivo(){
    this.transacaoService.buscarTransacoes(this.saque).subscribe(
      x=>{
        x.forEach(y => {
          try {
            this.saldoAtivo += parseFloat(y.valor);  
          } catch (error) {}
         // this.saldoAtivoFormatado =  Util.formatReal(this.saldoAtivo.toFixed(2));
        });
      },
    );
  }

  private dataAtual() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    return [ano,mes,dia].join('-');
}

teste(deposito: Transacao){
  
  
  console.log(deposito.id_transacao);
}

}

  

  
    



