import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Acao} from '../model/acao';
import { Observable } from 'rxjs';
import { JsonGenerate } from '../JSONS/jsonGenerate';
import { ConfigUrl } from '../configUrl';
import { JsonDefault } from '../JSONS/jsonDefault';

@Injectable({
  providedIn: 'root'
})

export class AcaoService {

  constructor(
    private http: HttpClient
  ) { }

  public insertAcao(acao:Acao): Observable<Acao>{
    
    var httpOptions = JsonDefault.getHeaders();
    var jsonAcao= JsonGenerate.getJson('Acao','1',acao);

    return this.http.post<Acao>(ConfigUrl.DEFAULT_URL+'/insert', jsonAcao, httpOptions);
  }

}
