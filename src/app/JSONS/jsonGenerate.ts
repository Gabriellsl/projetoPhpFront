import { JsonDefault } from "./jsonDefault";


export class JsonGenerate{
    
public static getJson(object: Object){
        
    var token = '';

    var x = new Array();
    // console.log(x)
    x.push(object);  
    return JSON.stringify(x);        
}



public static arrayAcoes = [];

public static getAcoes(acao1:string, acao2:string, acao3:string, acao4:string){
    var arrayAcoes = [];
    arrayAcoes.push(acao1,acao2,acao3,acao4);
    return arrayAcoes;
}
}
