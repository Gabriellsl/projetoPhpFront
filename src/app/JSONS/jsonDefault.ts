export class JsonDefault{
    
    public static config(token:string, classe:string, dados:string){
        return JSON.stringify(
            {
                "token":token,
                "class":classe,
                "dados":dados
            }
        );
    }
}