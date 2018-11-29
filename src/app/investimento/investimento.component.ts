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
@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css']
})




export class InvestimentoComponent implements OnInit {

  transacaoDeposito: Transacao = {
    id_transacao: 0,
    id_investidor: 1,
    id_configtaxa:1,
    tipo: '+',
    data: this.dataAtual(),
    valor: 10,
    status: 'ATIVO',
    datasaque: '2020-10-10',
  };
  saque: Transacao={
    id_transacao: 0,
    id_investidor: 1,
    id_configtaxa:1,
    tipo: '+',
    data: '',
    valor: 0,
    status: '',
    datasaque: '',
  }

  saldoAtivo = 0;

  constructor(private http: HttpClient,
              private transacaoService: TransacaoService) { }

  ngOnInit() {
    this.calculaSaldoAtivo();
  }


  public investir(): /*Observable<TransacaoDeposito>*/void {

      this.transacaoDeposito.status = 'ATIVO';
      this.transacaoDeposito.data = this.dataAtual();
      this.transacaoDeposito.tipo = "+";


      this.transacaoService.insertTransacao(this.transacaoDeposito).subscribe(
        x => {
          console.log(x);
        },
        err => {
          
        }
      );

  }

  public calculaSaldoAtivo(){
    this.transacaoService.findSaques(this.saque).subscribe(
      x=>{
        for (let i = 1; i < x['config']['dados']; i++) {
          this.saldoAtivo+=  parseFloat(x['dados'][i]['valor']);
        }
      }

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

  

  
    



