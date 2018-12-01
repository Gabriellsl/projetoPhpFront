import { JsonDefault } from "./jsonDefault";


export class JsonGenerate{
    
    public static getJson(classe:string, dados:string, object:Object){
        
        var token = '';

        if(!JSON.parse(localStorage.getItem('currentUser')) && classe != 'login'){
            console.log("Não tem ngm logado");
            return;
        }else if(classe != 'login'){
            token = JSON.parse(localStorage.getItem('currentUser'))['token'];
        }

        return JSON.stringify(
            {
                config:JsonDefault.config(token, classe, dados),
                dados:{
                    1:object
                    }
            }
        );        

    
}
public static arrayAcoes = [];

public static getAcoes(acao1:string, acao2:string, acao3:string, acao4:string){
    var arrayAcoes = [];
    arrayAcoes.push(acao1,acao2,acao3,acao4);
    return arrayAcoes;
}
}
