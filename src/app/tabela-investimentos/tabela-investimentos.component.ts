import { Component, OnInit } from '@angular/core';
import { Transacao } from '../model/transacao';
import { TransacaoService } from '../services/transacao.service';

@Component({
  selector: 'app-tabela-investimentos',
  templateUrl: './tabela-investimentos.component.html',
  styleUrls: ['./tabela-investimentos.component.css']
})
export class TabelaInvestimentosComponent implements OnInit {

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

  saquesDisponiveis: Transacao[] = new Array;
  constructor(
    private transacaoService: TransacaoService
  ) { }

  ngOnInit() {
    this.findSaquesDisponiveis();
  }

  findSaquesDisponiveis(): void {
    this.transacaoService.findSaques(this.saque).subscribe(
      x=>{
        for (let i = 1; i < x['config']['dados']; i++) {
          this.saquesDisponiveis.push(x['dados'][i])
        }
        console.log(this.saquesDisponiveis)
      }
    )
}
  solicitarSaque(transacao:Transacao){

  }
}
