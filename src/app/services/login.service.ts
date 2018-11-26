import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../services/messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ConfigUrl } from '../configUrl'; 

import {JsonGenerate} from '../JSONS/jsonGenerate';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private messageService: MessagesService,
    private http: HttpClient ) { }

  autenticar(login: Login):Observable<Login>{
    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    var jsonLogin = JsonGenerate.getJsonLogin(login.login, login.password);
    
    return this.http.post<any>(ConfigUrl.DEFAULT_URL, jsonLogin, httpOptions);
  }

  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
}
