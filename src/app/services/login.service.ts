import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../services/messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api = 'http://192.168.0.106/Projeto_PHP/index.php/login';

  login: Login = {
    email:"",
    password:""
  };
  constructor(
    private messageService: MessagesService,
    private http: HttpClient ) { }

  autentica(login: Login):boolean{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    this.http.post<any>(this.api, login, httpOptions).subscribe(x=>alert(x));
    
    return true;
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
