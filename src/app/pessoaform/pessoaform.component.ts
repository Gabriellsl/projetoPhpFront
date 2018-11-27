import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { Senha } from '../model/senha';
import { PessoaFormService } from '../services/pessoa-form.service';

@Component({
  selector: 'app-pessoaform',
  templateUrl: './pessoaform.component.html',
  styleUrls: ['./pessoaform.component.css']
})
export class PessoaformComponent implements OnInit {

pessoa: Pessoa = {
  id_pessoa : '',
  nome: '',
  email: '',
  cpf: '',
  rg: '',
  login: '',
  senha: '',
  tipo: '',
}

senha: Senha = {
  senha1 : '',
  senha2 : '',
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

  salvar(): void {
    if(this.validarSenhas(this.senha)){
      
      this.pessoa.senha = this.senha.senha1;
      this.pessoaFormService.insertPessoa(this.pessoa).subscribe(x=>console.log(x));
    }else{
      alert("Senhas diferentes");
    }
    
      
  }


}
