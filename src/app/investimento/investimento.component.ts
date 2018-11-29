import { Component, OnInit } from '@angular/core';
import { TransacaoDeposito } from '../model/transacaodeposito';
import { JsonGenerate } from '../JSONS/jsonGenerate';
import { JsonDefault } from '../JSONS/jsonDefault';
import { ConfigUrl } from '../configUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransacaoDepositoService } from '../services/transacao-deposito.service';


@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css']
})
export class InvestimentoComponent implements OnInit {

  transacaoDeposito: TransacaoDeposito = {
    id_transacao: 0,
    id_investidor: 1,
    id_configtaxa:1,
    tipo: '+',
    data: this.dataAtual(),
    valor: 10,
    status: 'ATIVO',
    datasaque: '2020-10-10',
  };


  constructor(private http: HttpClient,
              private transacaoDepositoService: TransacaoDepositoService) { }

  ngOnInit() {
  }


  salvar(): /*Observable<TransacaoDeposito>*/void {

      this.transacaoDeposito.status = 'ATIVO';
      this.transacaoDeposito.data = this.dataAtual();
      this.transacaoDeposito.tipo = "+";


      this.transacaoDepositoService.insertTransacao(this.transacaoDeposito).subscribe(
        x => {
          console.log(x);
        },
        err => {
          
        }
      );

  }
  
  sacar(): void {
      
  }

  dataAtual() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    return [ano,mes,dia].join('-');
}



}

  
  
    



