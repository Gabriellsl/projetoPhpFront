export class Aplicacoes{

    id_aplicacoes: Number;
    id_gestor: Number;
    datacompra: String;
    datavenda: String;
    status: Status;

}

enum Status{"ATIVO","INATIVO"}