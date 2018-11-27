import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { Senha } from '../model/senha';

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

  constructor() { }

  ngOnInit() {
    
  }

  logar(): void {
    
    if(this.senha.senha1 == this.senha.senha2)
      this.pessoa.senha = this.senha.senha1;
    else
      alert("SENHAS DIFERENTES SEU ANIMAL");
                                            

      console.log(this.pessoa);
      console.log(this.senha);

    
  }


}
