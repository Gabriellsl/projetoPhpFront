export class Transacao{

    id_transacao: Number;
    id_investidor: Number;
    id_configtaxa: Number;
    tipo: string;
    data: String;
    valor: Number;
    status: string;
    datasaque: String;
    dataprevistasaque:String;
    rendimento:Number;

}

enum Tipo {"+","-"};
enum Status {"ATIVO","INATIVO"};