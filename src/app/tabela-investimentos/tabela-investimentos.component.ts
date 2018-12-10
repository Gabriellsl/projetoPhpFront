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
    data: '22/10/2018',
    valor: 1500.50,
    status: '',
    datasaque: '22/01/2019',
  }

  depositoEfetuado2: Transacao={
    id_transacao: 2,
    id_investidor: 0,
    id_configtaxa: 0,
    tipo: '+',
    data: '30/11/2018',
    valor: 500.750,
    status: '',
    datasaque: '30/03/2019',
  }

  depositoEfetuado3: Transacao={
    id_transacao: 3,
    id_investidor: 0,
    id_configtaxa: 0,
    tipo: '+',
    data: '12/07/2018',
    valor: 218.35,
    status: '',
    datasaque: '12/12/2019',
  }

  depositoEfetuado4: Transacao={
    id_transacao: 3,
    id_investidor: 0,
    id_configtaxa: 0,
    tipo: '+',
    data: '12/07/2018',
    valor: 218.35,
    status: '',
    datasaque: '12/12/2019',
  }

  depositoEfetuado5: Transacao={
    id_transacao: 3,
    id_investidor: 0,
    id_configtaxa: 0,
    tipo: '+',
    data: '12/07/2018',
    valor: 218.35,
    status: '',
    datasaque: '12/12/2019',
  }

  depositoEfetuado6: Transacao={
    id_transacao: 3,
    id_investidor: 0,
    id_configtaxa: 0,
    tipo: '+',
    data: '12/07/2018',
    valor: 218.35,
    status: '',
    datasaque: '12/12/2019',
  }

  depositoEfetuado7: Transacao={
    id_transacao: 3,
    id_investidor: 0,
    id_configtaxa: 0,
    tipo: '+',
    data: '12/07/2018',
    valor: 218.35,
    status: '',
    datasaque: '12/12/2019',
  }

  depositoEfetuado8: Transacao={
    id_transacao: 3,
    id_investidor: 0,
    id_configtaxa: 0,
    tipo: '+',
    data: '12/07/2018',
    valor: 218.35,
    status: '',
    datasaque: '12/12/2019',
  }

  depositoEfetuado9: Transacao={
    id_transacao: 3,
    id_investidor: 0,
    id_configtaxa: 0,
    tipo: '+',
    data: '12/07/2018',
    valor: 218.35,
    status: '',
    datasaque: '12/12/2019',
  }
  
  depositosEfetuados: Transacao[] = new Array;

  constructor(
    private transacaoService: TransacaoService
  ) { }

  ngOnInit() {
    // this.buscarDepositosEfetuados();
    this.depositosEfetuados.push(this.depositoEfetuado);
    this.depositosEfetuados.push(this.depositoEfetuado2);
    this.depositosEfetuados.push(this.depositoEfetuado3);
    this.depositosEfetuados.push(this.depositoEfetuado4);
    this.depositosEfetuados.push(this.depositoEfetuado5);
    // this.depositosEfetuados.push(this.depositoEfetuado6);
    // this.depositosEfetuados.push(this.depositoEfetuado7);
    // this.depositosEfetuados.push(this.depositoEfetuado8);
    // this.depositosEfetuados.push(this.depositoEfetuado9);
    
  }

  teste(transacao:Transacao){
    alert(transacao.valor);
    this.depositosEfetuados.pop;
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
