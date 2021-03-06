import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transacao } from '../model/transacao';
import { JsonGenerate } from '../JSONS/jsonGenerate';
import { ConfigUrl } from '../configUrl';
import { Observable } from 'rxjs';
import { JsonDefault } from '../JSONS/jsonDefault';

// usado por investidor

@Injectable({
  providedIn: 'root'
})

export class TransacaoService {

  constructor(private http: HttpClient) { }

  public insertTransacao(transacao:Transacao): Observable<Transacao>{

    var httpOptions = JsonDefault.getHeaders("Transacao");    
    var jsonTransacao= JsonGenerate.getJson(transacao);
    
    return this.http.post<Transacao>(ConfigUrl.DEFAULT_URL+'/depositar', jsonTransacao, httpOptions)

  }

  public buscarTransacoes(transacao:Transacao): Observable<any>{
    var httpOptions = JsonDefault.getHeaders("Transacao");
    
    var jsonTransacao= JsonGenerate.getJson(transacao);
    return this.http.post<Transacao>(ConfigUrl.DEFAULT_URL+'/findsaquesdisponiveis', jsonTransacao, httpOptions)

  }

  public sacar(saque:Transacao): Observable<Transacao>{
    var httpOptions = JsonDefault.getHeaders("Transacao");
    
    var jsonSaque= JsonGenerate.getJson(saque);

    console.log(saque);

    return this.http.post<Transacao>(ConfigUrl.DEFAULT_URL+'/sacar', jsonSaque, httpOptions)

  }



}
