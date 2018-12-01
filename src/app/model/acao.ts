export class Acao{
    
    id_acao: Number;
    id_gestor: Number;
    valorvenda : Number;
    descricao: String;
    tipo: String;
    rendimento: Number;
    status: string;
    valorcompra: Number;
    datacompra: string;
    datavenda: string;
    
}

enum Status {"ATIVO","VENDIDA"};