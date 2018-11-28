import { Component, OnInit } from '@angular/core';
import { TransacaoDeposito } from '../model/transacaodeposito';


@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css']
})
export class InvestimentoComponent implements OnInit {

  transacaoDeposito: TransacaoDeposito = {
    id_transacao: 0,
    id_investidor: 0,
    tipo: '',
    data: '',
    valorInvestido: 0,
    status: '',
    data_saque: '',
  };


  constructor() { }

  ngOnInit() {
  }


  salvar(): void {
    localStorage.setItem('tipo', JSON.stringify({
      "token":"token",
      "user":{"user":{"tipo":1}}
      
    }));


      this.transacaoDeposito.status = 'ATIVO';
      this.transacaoDeposito.data = this.dataAtual();
      this.transacaoDeposito.tipo = "+";
      console.log(this.transacaoDeposito);
  }
  
  sacar(): void {
      
  }

  dataAtual() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    return [dia, mes, ano].join('/');
}



}

  
  
    



