import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { JsonDefault } from '../JSONS/jsonDefault';
import { ConfigUrl } from '../configUrl';
import { HttpClient } from '@angular/common/http';
import { JsonGenerate } from '../JSONS/jsonGenerate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CruddefaultService {

  constructor(
    private http:HttpClient
  ) { }
  
  public insert(object:Object, type:string): Observable<Object>{
    
    var httpOptions = JsonDefault.getHeaders(type);
    var json = JsonGenerate.getJson(object);


    return this.http.post<Object>(ConfigUrl.DEFAULT_URL+'/insert', json, httpOptions);
  }
}
