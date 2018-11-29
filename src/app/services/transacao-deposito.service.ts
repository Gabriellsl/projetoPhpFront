import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransacaoDeposito } from '../model/transacaodeposito';
import { JsonGenerate } from '../JSONS/jsonGenerate';
import { ConfigUrl } from '../configUrl';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TransacaoDepositoService {

  constructor(private http: HttpClient) { }

  public insertAcao(transacao:TransacaoDeposito): Observable<TransacaoDeposito>{

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var jsonTransacao= JsonGenerate.getJson('','Transacao','1',transacao);

    return this.http.post<TransacaoDeposito>(ConfigUrl.DEFAULT_URL+'/insert', jsonTransacao, httpOptions)

  }

}
