import { JsonDefault } from "./jsonDefault";


export class JsonGenerate{

    
    public static getJsonLogin(email:string, password:string):string{
        return JSON.stringify(
            {
                "config":JsonDefault.config('','','1'),
                "dados":{
                    "1":{
                        "login":email,
                         "password":password
                        }
                    }
            }
        );
    }

}
