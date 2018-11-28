import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ConfigUrl } from '../configUrl'; 

import {JsonGenerate} from '../JSONS/jsonGenerate';
import { JsonDefault } from '../JSONS/jsonDefault';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient ) { }

  autenticar(login: Login):Observable<Login>{
    
    
  
    var jsonLogin = JsonGenerate.getJson('','','',login);
    var httpOptions = JsonDefault.getHeaders();
    
    return this.http.post<Login>(ConfigUrl.DEFAULT_URL+"/login", jsonLogin, httpOptions);
  }


  // Metodo utilizado para resgatar os dados de tipo e id do tipo de uma pessoa 
  selectUser(pessoa:Pessoa):Observable<any>{

      var jsonSelectUser = JsonGenerate.getJson('','Pessoa','',pessoa);
      var httpOptions = JsonDefault.getHeaders();
      return this.http.post<Pessoa>(ConfigUrl.DEFAULT_URL+"/selectuser", jsonSelectUser, httpOptions);
  }

}
