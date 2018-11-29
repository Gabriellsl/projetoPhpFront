import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transacao } from '../model/transacao';
import { JsonGenerate } from '../JSONS/jsonGenerate';
import { ConfigUrl } from '../configUrl';
import { Observable } from 'rxjs';

// usado por investidor

@Injectable({
  providedIn: 'root'
})

export class TransacaoService {

  constructor(private http: HttpClient) { }

  public insertTransacao(transacao:Transacao): Observable<Transacao>{

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var jsonTransacao= JsonGenerate.getJson('','Transacao','1',transacao);

    console.log(jsonTransacao);


    return this.http.post<Transacao>(ConfigUrl.DEFAULT_URL+'/insert', jsonTransacao, httpOptions)

  }

  public findSaques(saque:Transacao): Observable<Transacao>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var jsonSaque= JsonGenerate.getJson('','Transacao','1',saque);

    console.log(jsonSaque);


    return this.http.post<Transacao>(ConfigUrl.DEFAULT_URL+'/findbyatributes', jsonSaque, httpOptions)

  }

}
