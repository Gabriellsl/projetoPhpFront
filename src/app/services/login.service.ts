import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ConfigUrl } from '../configUrl'; 

import {JsonGenerate} from '../JSONS/jsonGenerate';
import { JsonDefault } from '../JSONS/jsonDefault';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient ) { }

  autenticar(login: Login):Observable<Login>{
    
    
  
    var jsonLogin = JsonGenerate.getJson('','','',login);
    var httpOptions = JsonDefault.getHeaders();
    
    console.log(jsonLogin);

    return this.http.post<Login>(ConfigUrl.DEFAULT_URL+"/login", jsonLogin, httpOptions);
  }

}
