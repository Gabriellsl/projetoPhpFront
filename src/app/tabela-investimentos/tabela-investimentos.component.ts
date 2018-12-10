import { Component, OnInit } from '@angular/core';
import { Transacao } from '../model/transacao';
import { TransacaoService } from '../services/transacao.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabela-investimentos',
  templateUrl: './tabela-investimentos.component.html',
  styleUrls: ['./tabela-investimentos.component.css']
})
export class TabelaInvestimentosComponent implements OnInit {

  depositoEfetuado: Transacao={
    id_transacao: 1,
    id_investidor: 0,
    id_configtaxa: 0,
    tipo: '+',
    data: null,
    valor: null,
    status: '',
    datasaque: null,
  }

 
  
  depositosEfetuados: Transacao[] = new Array;

  constructor(
    private transacaoService: TransacaoService
  ) { }

  ngOnInit() {
    this.buscarDepositosEfetuados();
  
    
  }

  teste(transacao:Transacao){
    alert(transacao.valor);
    this.depositosEfetuados.pop;
  }


  buscarDepositosEfetuados(): void {
    this.transacaoService.buscarTransacoes(this.depositoEfetuado).subscribe(
      x=>{
        // alert("OK buscarDepositosEfetuados")
        x.map(y=> {
          try {
            this.depositosEfetuados.push(y)
          } catch (error) {
            // alert("TRY CATCH buscarDepositosEfetuados")
          }
        })
        
      },
      // err=>alert("err buscarDepositosEfetuados")
    )
}
  sacar(transacao:Transacao){
    this.transacaoService.sacar(transacao).subscribe(
      x=>alert('sacou')
    );
  }
}
