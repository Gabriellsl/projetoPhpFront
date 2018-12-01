import { JsonDefault } from "./jsonDefault";


export class JsonGenerate{
    
    public static arrayAcoes = [];

    public static getJson(token:string, classe:string, dados:string, object:Object){
        return JSON.stringify(
            {
                config:JsonDefault.config(token, classe, dados),
                dados:{
                    1:object
                    }
            }
        );
    }

    public static getAcoes(acao1:string, acao2:string, acao3:string, acao4:string){
        var arrayAcoes = [];
        arrayAcoes.push(acao1,acao2,acao3,acao4);
        return arrayAcoes;
    }
}
