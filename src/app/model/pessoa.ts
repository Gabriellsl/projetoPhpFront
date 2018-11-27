export class Pessoa{

    idPessoa: Number;
    nome: String;
    email: String;
    cpf: String;
    rg: String;
    login: String;
    senha: String;
    tipo: Tipo;
    
}

enum Tipo {"ADM","INV","GES"};