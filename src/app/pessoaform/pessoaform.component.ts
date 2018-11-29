import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { Senha } from '../model/senha';
import { PessoaFormService } from '../services/pessoa-form.service';
import { Gestor} from '../model/gestor';
import { Administrador} from '../model/administrador';
import {Investidor} from '../model/investidor';


@Component({
  selector: 'app-pessoaform',
  templateUrl: './pessoaform.component.html',
  styleUrls: ['./pessoaform.component.css']
})
export class PessoaformComponent implements OnInit {

pessoa: Pessoa = {
  id_pessoa : 0,
  nome: 'Rafael',
  email: 'ss',
  cpf: 'ss',
  rg: 'ss',
  login: 's',
  senha: 's',
  tipo: 'INV',

}

gestor: Gestor = {
  id_gestor: 0,
  id_pessoa: 0,
  meta: 10.0,
  giromaximo: 10.0,
}

administrador: Administrador = {
  id_administrador: 0,
  id_pessoa: 0,
}

investidor: Investidor = {
  id_investidor: 0,
  id_pessoa : 0,
  saldo: 0,
}

senha: Senha = {
  senha1 : 'ss',
  senha2 : 'ss',
}

  constructor(
    private pessoaFormService: PessoaFormService
  ) { }

  ngOnInit() {
    
  }

  private validarSenhas(senha:Senha):boolean{
    if(senha.senha1 == senha.senha2){
      return true;
    }
    else
      return false;
  }

  public salvarPessoa(): void {
    if(this.validarSenhas(this.senha)){
      
      this.pessoa.senha = this.senha.senha1;
      this.pessoaFormService.insertPessoa(this.pessoa).subscribe(
        (x)=>{
          
            if(this.pessoa.tipo == 'ADM'){
              
              this.administrador.id_pessoa   = x['dados']['1']['id_pessoa'];

              this.pessoaFormService.insertAdministrador(this.administrador).subscribe(
                y=>{
                  alert("insercao de administrador");
                },
                err=>{
                  alert("erro na insercao de administrador");
                }
              )
            }else if(this.pessoa.tipo == 'INV'){
              this.investidor.id_pessoa      = x['dados']['1']['id_pessoa']
              this.pessoaFormService.insertInvestidor(this.investidor).subscribe(
                y=>{
                  alert("insercao de investidor");
                },
                err=>{
                  alert("erro na insercao de investidor");
                }
              )
            }else{
              this.gestor.id_pessoa          = x['dados']['1']['id_pessoa']
              this.pessoaFormService.insertGestor(this.gestor).subscribe(
                y=>{
                  alert("insercao de Gestor");
                },
                err=>{
                  alert("erro na insercao de gestor");
                }
              )
            }
        }
      );

    }else{
      alert("Senhas diferentes");
    }
    
      
  }


}
