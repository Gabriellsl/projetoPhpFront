import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigUrl } from '../configUrl';
import { JsonDefault } from '../JSONS/jsonDefault';
import { JsonGenerate } from '../JSONS/jsonGenerate';
import { Login } from '../model/login';
import { Pessoa } from '../model/pessoa';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient ) { }

  autenticar(login: Login):Observable<Login>{
    var jsonLogin = JsonGenerate.getJson('login',1,login);
    var httpOptions = JsonDefault.getHeaders();
    
    return this.http.post<Login>(ConfigUrl.DEFAULT_URL+"/login", jsonLogin, httpOptions);
  }


  // Metodo utilizado para resgatar os dados de tipo e id do tipo de uma pessoa 
  selectUser(pessoa:Pessoa):Observable<any>{

      var jsonSelectUser = JsonGenerate.getJson('Pessoa',1,pessoa);
      var httpOptions = JsonDefault.getHeaders();
      return this.http.post<Pessoa>(ConfigUrl.DEFAULT_URL+"/selectuser", jsonSelectUser, httpOptions);
  }


  logout(){
     var jsonLogout = JsonGenerate.getJson('login',1,null);
     var httpOptions = JsonDefault.getHeaders();
     this.http.post<Pessoa>(ConfigUrl.DEFAULT_URL+"/logout", jsonLogout, httpOptions);
  }

}
