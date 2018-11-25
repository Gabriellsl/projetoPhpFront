export class JsonGenerate{

    public static getJsonLogin(email:string, password:string):string{
        return '{ "config":{"token":"","class":"Pessoa","dados":1},"dados":{"1":{"login":"'+email+'", "password":"'+password+'"}}}';
    }

}