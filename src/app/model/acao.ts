export class Acao{
    
    id_acao: Number;
    id_aplicacoes: Number;
    valor : Number;
    descricao: String;
    tipo: String;
    rendimento: Number;
    status: Status;
    valorcompra: Number;
    
}

enum Status {"ATIVO","VENDIDA"};