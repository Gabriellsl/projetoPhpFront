import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonDefault } from '../JSONS/jsonDefault';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  constructor(private http: HttpClient) { }


  findData():Observable<any>{   
    var httpOptions = JsonDefault.getHeaders();
    var urlAPI1 = JsonDefault.getAPI1();
    return this.http.get<any>(urlAPI1, httpOptions);
  }


}
