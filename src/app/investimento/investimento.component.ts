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
import { Permission } from '../permission_controll'
import { Router } from '@angular/router';
import { Util } from '../util'

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css']
})




export class InvestimentoComponent implements OnInit {

  minDate: Date;

  // TABELA INVESTIMENTOS
  depositoEfetuado: Transacao = {
    id_transacao: 1,
    id_investidor: 0,
    id_configtaxa: 0,
    tipo: '+',
    data: null,
    valor: null,
    status: '',
    datasaque: null,
    dataprevistasaque: null,
    rendimento: null
  }

  depositosEfetuados: Transacao[] = new Array;

  // TABELA SACADOS
  transacaoSaque: Transacao = {
    id_transacao: 0,
    id_investidor: 0,
    id_configtaxa: 0,
    tipo: "-",
    data: '',
    valor: 0,
    status: '',
    datasaque: null,
    dataprevistasaque: null,
    rendimento: null
  }

  transacoesSacadas: Transacao[] = new Array;


  transacaoDeposito: Transacao = {
    id_transacao: 0,
    id_investidor: 2,
    id_configtaxa: 3,
    tipo: '+',
    data: null,
    valor: null,
    status: 'ATIVO',
    datasaque: null,
    dataprevistasaque: null,
    rendimento: null
  };
  saque: Transacao = {
    id_transacao: 0,
    id_investidor: 0,
    id_configtaxa: 0,
    tipo: '+',
    data: '',
    valor: 0,
    status: '',
    datasaque: null,
    dataprevistasaque: null,
    rendimento: 0
  }

  saldoAtivo: number = 0;

  saldoAtivoFormatado = Util.formatReal(this.saldoAtivo);

  constructor(private http: HttpClient,
    private transacaoService: TransacaoService,
    private router: Router
  ) { }

  ngOnInit() {


    if (Permission.execute(this.router)) {
      this.calculaSaldoAtivo();

      this.minDate = new Date();
      this.minDate.setMonth(this.minDate.getMonth() == 12 ? 1 : this.minDate.getMonth() + 1);
      this.minDate.setFullYear(this.minDate.getMonth() == 12 ? this.minDate.getFullYear() + 1 : this.minDate.getFullYear());
    }

    //  TABELA INVESTIMENTOS
    this.buscarDepositosEfetuados();
    //  TABELA SACADOS
    this.buscarTransacoesSacadas();
  }

  // teste(transacao:Transacao){
  //   alert(transacao.valor);
  //   this.depositosEfetuados.pop;
  // }

  buscarDepositosEfetuados(): void {
    this.depositosEfetuados = new Array();
    this.transacaoService.buscarTransacoes(this.depositoEfetuado).subscribe(
      x => {
        // alert("OK buscarDepositosEfetuados")
        x.map(y => {
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

  sacar(transacao: Transacao) {
    transacao.datasaque="";
    this.transacaoService.sacar(transacao).subscribe(
      x => {
        alert("Saque efetuado com sucesso!");
        this.buscarTransacoesSacadas();
        this.buscarDepositosEfetuados();
        this.calculaSaldoAtivo();
      },
      y=> alert("Erro ao sacar!")
    );
  }


  //  TABELA SACADOS
  buscarTransacoesSacadas(): void {
    this.transacoesSacadas = new Array();
    this.transacaoService.buscarTransacoes(this.transacaoSaque).subscribe(
      x => {
        x.forEach(y => {
          try {
            this.transacoesSacadas.push(y);
          } catch (error) { }
        });
      },
    );
  }



  public investir(): /*Observable<TransacaoDeposito>*/void {


    if (this.transacaoDeposito.dataprevistasaque == null || this.transacaoDeposito.valor == null) {
      alert("Prencha os campos requeridos");
      return;
    }


    console.log(this.transacaoDeposito.datasaque);
    this.transacaoService.insertTransacao(this.transacaoDeposito).subscribe(
      x => {
        alert("Deposito efetuado com sucesso!");
        this.transacaoDeposito.valor = 0;
        this.buscarDepositosEfetuados();
        this.calculaSaldoAtivo();
      },
      err => {
        alert("Erro ao depositar!");
      }
    );

  }

  public calculaSaldoAtivo() {
    this.saldoAtivo = 0;
    this.transacaoService.buscarTransacoes(this.saque).subscribe(
      x => {
        x.forEach(y => {
          try {
            this.saldoAtivo += parseFloat(y.valor);
          } catch (error) { }
          // this.saldoAtivoFormatado =  Util.formatReal(this.saldoAtivo.toFixed(2));
        });
      },
    );
  }

  private dataAtual() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    return [ano, mes, dia].join('-');
  }

  teste(deposito: Transacao) {


    console.log(deposito.id_transacao);
  }

}








