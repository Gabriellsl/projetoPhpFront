import { HttpHeaders, HttpInterceptor } from "@angular/common/http";

export class JsonDefault{
    
    public static API_KEY = "37XW1AG28U0HVLTX";

    public static config(token:string, classe:string, dados:Number){
        return (
            {
                token:token,
                class:classe,
                dados:dados
            }
        );
    }

    public static getHeaders(){
        
        return  {
            headers: new HttpHeaders({ 
                'Content-Type':'application/json',
                'Bearer': 'ew0KICAgICAgICBpZDoxMCwNCiAgICAgICAgbm9tZTpSYWZhZWwNCiAgICAgIH0='})
          };
          


    }

    public static getAPI1(acao:string){
        return "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+acao+"&interval=5min&outputsize=compact&apikey=37XW1AG28U0HVLTX";
    }
}