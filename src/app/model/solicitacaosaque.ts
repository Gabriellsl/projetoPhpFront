export class SolicitacaoSaque{

    id_solicitacaosaque: Number;
    id_investidor: Number;
    valor: Number;
    data: String;
    status: Tipo;

}

enum Tipo{"AGUARDANDO","APROVADO"};