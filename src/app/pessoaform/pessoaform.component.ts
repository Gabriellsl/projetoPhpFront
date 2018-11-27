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
  senha1 : 0,
  senha2 : 0,
}

  constructor() { }

  ngOnInit() {
    
  }

  logar(): void {
    
                                            

      console.log(this.pessoa);
      console.log(this.senha);

    
  }


}
