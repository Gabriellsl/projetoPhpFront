import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigUrl } from '../configUrl';
import { JsonGenerate } from '../JSONS/jsonGenerate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaFormService {

  constructor(
    private http: HttpClient
  ) { }

  public insertPessoa(pessoa:Pessoa): Observable<Pessoa>{
    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    var jsonPessoa = JsonGenerate.getJson('','Pessoa','1',pessoa);

    console.log(jsonPessoa);

    return this.http.post<Pessoa>(ConfigUrl.DEFAULT_URL+'/insert', jsonPessoa, httpOptions);
  }
}
