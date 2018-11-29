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


  depositos: TransacaoDeposito[] = [
    { id_transacao: 1, id_investidor: 1, tipo:'+' , data: '10/10/1992', valorinvestido: 2500, status: 'Ativo',datasaque: '10/10/2020'},
    { id_transacao: 2, id_investidor: 2, tipo:'+' , data: '12/10/1992', valorinvestido: 3500, status: 'Ativo',datasaque: '12/10/2020'},
    { id_transacao: 3, id_investidor: 3, tipo:'+' , data: '14/10/1992', valorinvestido: 4500, status: 'Ativo',datasaque: '14/10/2020'},
    { id_transacao: 4, id_investidor: 4, tipo:'+' , data: '16/10/1992', valorinvestido: 5500, status: 'Ativo',datasaque: '16/10/2020'},
    { id_transacao: 5, id_investidor: 5, tipo:'+' , data: '18/10/1992', valorinvestido: 6500, status: 'Ativo',datasaque: '18/10/2020'},
    
  ];


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

teste(deposito: TransacaoDeposito){
  
  
  console.log(deposito.id_transacao);
}





}

  

  
    



