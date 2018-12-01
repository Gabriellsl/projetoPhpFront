import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonDefault } from '../JSONS/jsonDefault';
import { JsonGenerate } from '../JSONS/jsonGenerate';
import { Gestor } from '../model/gestor';

@Injectable({
  providedIn: 'root'
})
export class GestaoService {

  constructor() { }

    comprarAcao():Observable<any>{
      
    // var jsonLogin = JsonGenerate.getJson('login','',login);
    // var httpOptions = JsonDefault.getHeaders();
    
    // return this.http.post<Gestor>(ConfigUrl.DEFAULT_URL+"/login", jsonLogin, httpOptions);
    return;
    }
}
