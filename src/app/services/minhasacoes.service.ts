import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonDefault } from '../JSONS/jsonDefault';
import { HttpClient } from '@angular/common/http';
import { JsonGenerate } from '../JSONS/jsonGenerate';
import { Acao } from '../model/acao';
import { ConfigUrl } from '../configUrl';
@Injectable({
  providedIn: 'root'
})
export class MinhasacoesService {

  constructor(
    private http:HttpClient
  ) { }

  findData(acao:Acao):Observable<any>{   
    var httpOptions = JsonDefault.getHeaders();
    var jsonAcao = JsonGenerate.getJson('Acao', 1, acao);
    console.log(jsonAcao);
    return this.http.post<any>(ConfigUrl.DEFAULT_URL+'/listarminhasacoes', jsonAcao, httpOptions);
  }

  venderAcao(acao:Acao, qtd:Number):Observable<any>{
    var httpOptions = JsonDefault.getHeaders();
    var jsonAcao = JsonGenerate.getJson('Acao', qtd, acao);
    return this.http.post<any>(ConfigUrl.DEFAULT_URL+'/venderacoes', jsonAcao, httpOptions);
  }

}
