import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonDefault } from '../JSONS/jsonDefault';
import { JsonGenerate } from '../JSONS/jsonGenerate';
import { Acao } from '../model/acao';
import { HttpClient } from '@angular/common/http';
import { ConfigUrl } from '../configUrl';

@Injectable({
  providedIn: 'root'
})
export class GestaoService {

  constructor(
    private http:HttpClient
  ) { }

  comprarAcao(acao:Acao, qtd:Number):Observable<Acao>{
    var jsonAcao = JsonGenerate.getJson(acao);
    var httpOptions = JsonDefault.getHeaders('Acao');
    //console.log(jsonAcao);
    return this.http.post<Acao>(ConfigUrl.DEFAULT_URL+"/compraracao", jsonAcao, httpOptions);
  }

  venderAcao(acao:Acao):Observable<Acao>{
    var jsonAcao = JsonGenerate.getJson(acao);
    var httpOptions = JsonDefault.getHeaders('Acao');
   // console.log(jsonAcao)
    return this.http.post<Acao>(ConfigUrl.DEFAULT_URL+"/listarminhasacoes", jsonAcao, httpOptions);
  }

  listarMinhasAcoes(acao:Acao):Observable<any>{
    var jsonLogin = JsonGenerate.getJson(acao);
    var httpOptions = JsonDefault.getHeaders('Acao');
    return this.http.post<Acao>(ConfigUrl.DEFAULT_URL+"/listarminhasacoes", jsonLogin, httpOptions);
  }

}
