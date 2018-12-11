import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { Senha } from '../model/senha';
import { PessoaFormService } from '../services/pessoa-form.service';
import { Gestor} from '../model/gestor';
import { Administrador} from '../model/administrador';
import { Investidor } from '../model/investidor';
import { CruddefaultService } from '../services/cruddefault.service';
import { Permission } from '../permission_controll';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pessoaform',
  templateUrl: './pessoaform.component.html',
  styleUrls: ['./pessoaform.component.css']
})
export class PessoaformComponent implements OnInit {

tipoSelecionado: string;
validadorGestor: boolean;

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
    private pessoaFormService: PessoaFormService,
    private cruddefaultService: CruddefaultService,
    private router:Router
  ) { }

  ngOnInit() {
    
    if(Permission.execute(this.router)){
      this.tipoSelecionado="";
      this.validadorGestor=false;
    }

    
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
      this.cruddefaultService.insert(this.pessoa, 'Pessoa').subscribe(
        x=>{
            if(this.pessoa.tipo == 'ADM'){
              
              this.administrador.id_pessoa = x[0].id_pessoa;

              this.cruddefaultService.insert(this.administrador, 'Administrador').subscribe(
                y=>{
                  alert("insercao de administrador");
                },
                err=>{
                  alert("erro na insercao de administrador");
                }
              )
            }else if(this.pessoa.tipo == 'INV'){
              this.investidor.id_pessoa      = x[0].id_pessoa;
              this.cruddefaultService.insert(this.investidor, 'Investidor').subscribe(
                y=>{
                  alert("insercao de investidor");
                },
                err=>{
                  alert("erro na insercao de investidor");
                }
              )
            }else{
              this.gestor.id_pessoa          = x[0].id_pessoa;
              this.cruddefaultService.insert(this.gestor, 'Gestor').subscribe(
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

      this.pessoa.nome='';
      this.pessoa.email='';
      this.pessoa.cpf='';
      this.pessoa.rg='';
      this.pessoa.login='';
      this.pessoa.senha='';
      this.pessoa.tipo='';
      this.senha.senha1='';
      this.senha.senha2='';
      this.gestor.giromaximo=0;
      this.gestor.meta=0;
      alert("Cadastrado com sucesso");
    }else{
      alert("Senhas diferentes");
    }
    
      
  }

  public voltar(): void{
    this.router.navigate(['administracao']);
  }

  selecionaTipo(){
    if(this.tipoSelecionado=="GES"){
      this.validadorGestor=true;
    }else{
      this.validadorGestor=false;
    }
  }


}
