export class JsonDefault{
    
    public static config(token:string, classe:string, dados:string){
        return (
            {
                token:token,
                class:classe,
                dados:dados
            }
        );
    }
}