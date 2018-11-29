import { Component, OnInit } from '@angular/core';
import { Transacao } from '../model/transacao';
import { TransacaoService } from '../services/transacao.service';

@Component({
  selector: 'app-tabela-sacados',
  templateUrl: './tabela-sacados.component.html',
  styleUrls: ['./tabela-sacados.component.css']
})
export class TabelaSacadosComponent implements OnInit {

  saque: Transacao={
    id_transacao: 0,
    id_investidor: 1,
    id_configtaxa:1,
    tipo: '-',
    data: '',
    valor: 0,
    status: '',
    datasaque: '',
  }

  sacados: Transacao[] = new Array;
  constructor(
    private transacaoService: TransacaoService
  ) { }

  ngOnInit() {
    this.findSacados();
  }

  findSacados(): void {
    this.transacaoService.findSaques(this.saque).subscribe(
      x=>{
        for (let i = 1; i < x['config']['dados']; i++) {
          this.sacados.push(x['dados'][i])
        }
      }
    )
  }
  solicitarSaque(transacao:Transacao){
    
  }
}
