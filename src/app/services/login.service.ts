import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../services/messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {JsonGenerate} from '../JSONS/jsonGenerate';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api = 'http://192.168.0.106/Projeto_PHP/index.php/login';

  log:string;

  public setLog(log:string){
    this.log=log;
  }

  
  constructor(
    private messageService: MessagesService,
    private http: HttpClient ) { }

  autenticar(login: Login):Observable<Login>{
    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    var jsonLogin = JsonGenerate.getJsonLogin(login.email, login.password);
    
    return this.http.post<any>(this.api, jsonLogin, httpOptions);
  }

  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
}
