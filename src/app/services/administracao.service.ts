import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigUrl } from '../configUrl';
import { JsonDefault } from '../JSONS/jsonDefault';

@Injectable({
  providedIn: 'root'
})
export class AdministracaoService {

  constructor(
    private http:HttpClient
  ) { }


  public fundoDisponivel():Observable<any>{
    var httpOptions = JsonDefault.getHeaders('Transacao');
    return this.http.get<any>(ConfigUrl.DEFAULT_URL+"/fundodisponivel", httpOptions );
  }
}
