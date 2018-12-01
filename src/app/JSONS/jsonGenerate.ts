import { JsonDefault } from "./jsonDefault";


export class JsonGenerate{
    
public static getJson(classe:string, dados:Number, object: Object){
        
    var token = '';

    if(!JSON.parse(localStorage.getItem('currentUser')) && classe != 'login'){
        console.log("Não tem ngm logado");
        return;
    }else if(classe != 'login'){
        token = JSON.parse(localStorage.getItem('currentUser'))['token'];
    }

    var x = {
        config:JsonDefault.config(token, classe, dados),
        dados:[]
        }

    
    for (var index$ = 1; index$ <= dados; index$++) {
        x.dados.push(object);   
    }

    return JSON.stringify(
        x       
    );        


}


public static arrayAcoes = [];

public static getAcoes(acao1:string, acao2:string, acao3:string, acao4:string){
    var arrayAcoes = [];
    arrayAcoes.push(acao1,acao2,acao3,acao4);
    return arrayAcoes;
}
}
