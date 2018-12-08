export class Util{

    public static date_ts_mysql( date: Date){

        if(date==null) return null;

        var dia = date.getDay();
        var mes = date.getMonth();
        var ano = date.getFullYear();
        
        return ano+'-'+mes+'-'+dia;
    }

    public static date_mysql_ts(s:String){

    }
}