import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonDefault } from '../JSONS/jsonDefault';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  constructor(
    private http: HttpClient,
    ) { }


  findData(acao:string):Observable<any>{   
    var httpOptions = JsonDefault.getHeaders();
    var urlAPI1 = JsonDefault.getAPI1(acao);
    return this.http.get<any>(urlAPI1, httpOptions);
  }

  

}
