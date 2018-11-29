export class Transacao{

    id_transacao: Number;
    id_investidor: Number;
    id_configtaxa: Number;
    tipo: Tipo;
    data: String;
    valor: Number;
    status: Status;
    datasaque: String;

}

enum Tipo {"+","-"};
enum Status {"ATIVO","INATIVO"}