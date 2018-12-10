export class Util{

    public static date_ts_mysql( date: Date){

        if(date==null) return null;

        var dia = date.getDay();
        var mes = date.getMonth();
        var ano = date.getFullYear();
        
        return ano+'-'+mes+'-'+dia;
    }

    public static formatReal( valor ){
        var tmp = valor+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
    }

}