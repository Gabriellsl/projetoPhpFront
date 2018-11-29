import { JsonDefault } from "./jsonDefault";


export class JsonGenerate{
    
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

}
