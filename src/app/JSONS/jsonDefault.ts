import { HttpHeaders, HttpInterceptor } from "@angular/common/http";

export class JsonDefault{
    
    public static API_KEY = "37XW1AG28U0HVLTX";

    public static getHeaders(classe:string){
        
        if(classe!='login'){
            if(!JSON.parse(localStorage.getItem('currentUser')))
                alert("Você não está logado")
            var token = JSON.parse(localStorage.getItem('currentUser'))['token'];
        }
            
        else
            token = '';

        

        return  {
            headers: new HttpHeaders({ 
                'Content-Type':'application/json',
                'Bearer': token,
                'Class' : classe})
          };
          


    }

    public static getAPI1(acao:string){
        return "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+acao+"&interval=5min&outputsize=compact&apikey=37XW1AG28U0HVLTX";
    }
}