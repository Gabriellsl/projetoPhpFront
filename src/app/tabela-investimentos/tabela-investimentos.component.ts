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
    id_transacao: 0,
    id_investidor: 0,
    id_configtaxa: 0,
    tipo: '+',
    data: '',
    valor: 0,
    status: '',
    datasaque: '',
  }
  
  depositosEfetuados: Transacao[] = new Array;

  constructor(
    private transacaoService: TransacaoService
  ) { }

  ngOnInit() {
    this.buscarDepositosEfetuados();
    
    
  }


  buscarDepositosEfetuados(): void {
    this.transacaoService.buscarTransacoes(this.depositoEfetuado).subscribe(
      x=>{
        alert("OK buscarDepositosEfetuados")
        console.log(x)
        for (let i = 0; i < x['config']['dados']; i++) {
          try {
            this.depositosEfetuados.push(x['dados'][i])
          } catch (error) {
            alert("TRY CATCH buscarDepositosEfetuados")
          }
        }
        
      },
      err=>alert("err buscarDepositosEfetuados")
    )
}
  solicitarSaque(transacao:Transacao){
    this.transacaoService.sacar(transacao).subscribe(
      x=>alert('sacou')
    );
  }
}
