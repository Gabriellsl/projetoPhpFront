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

  private api = '192.168.0.106/Projeto_PHP/index.php/aa';

  login: Login = {
    email:"",
    password:""
  };
  
  constructor(
    private messageService: MessagesService,
    private http: HttpClient ) { }

  autentica(): Observable<Login>{
          return this.http.get<Login>(this.api).pipe(tap(_ => alert('fetched heroes')));
    
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
