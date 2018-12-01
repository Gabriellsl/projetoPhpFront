import { Component, OnInit } from '@angular/core';
import { Transacao } from '../model/transacao';
import { TransacaoService } from '../services/transacao.service';

@Component({
  selector: 'app-tabela-sacados',
  templateUrl: './tabela-sacados.component.html',
  styleUrls: ['./tabela-sacados.component.css']
})
export class TabelaSacadosComponent implements OnInit {

  transacaoSaque: Transacao={
    id_transacao: 0,
    id_investidor: 0,
    id_configtaxa:0,
    tipo: '-',
    data: '',
    valor: 0,
    status: '',
    datasaque: '',
  }

  transacoesSacadas: Transacao[] = new Array;
  constructor(
    private transacaoService: TransacaoService
  ) { }

  ngOnInit() {
    this.buscarTransacoesSacadas();
  }

  buscarTransacoesSacadas(): void {
    this.transacaoService.buscarTransacoes(this.transacaoSaque).subscribe(
      x=>{
        alert("OK buscarTransacoesSacadas");
        for (let i = 1; i < x['config']['dados']; i++) {
          try {
            this.transacoesSacadas.push(x['dados'][i])
          } catch (error) {
            alert("TRY CATCH buscarTransacoesSacadas");
            continue;
          } 
        }
      },
      err=>alert("ERRO buscarTransacoesSacadas")
    )
  }

  solicitarSaque(transacao:Transacao){
    
  }
}
