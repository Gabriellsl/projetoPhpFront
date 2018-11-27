import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigUrl } from '../configUrl';
import { JsonGenerate } from '../JSONS/jsonGenerate';
import { Observable } from 'rxjs';
import { Gestor } from '../model/gestor';
import { Administrador} from '../model/administrador';

@Injectable({
  providedIn: 'root'
})

export class PessoaFormService {

  constructor(
    private http: HttpClient
  ) { }

  public verificaTipo(pessoa:Pessoa, obj:Object){
    if(pessoa.tipo == 0){
      this.insertPessoa(pessoa);
      this.insertAdministrador(obj);
    }else if (pessoa.tipo == 1) {
      this.insertPessoa(pessoa);
    } else {
      this.insertPessoa(pessoa);
      this.insertGestor(obj);
    }
    
  }

  public insertPessoa(pessoa:Pessoa): Observable<Pessoa>{
    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    var jsonPessoa = JsonGenerate.getJson('',"Peassoa",'1',pessoa);

    console.log(jsonPessoa);

    return this.http.post<Pessoa>(ConfigUrl.DEFAULT_URL+'/insert', jsonPessoa, httpOptions);
  }

  public insertGestor(gestor:Object): Observable<Gestor>{
    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    var jsonGestor = JsonGenerate.getJson('','Gestor','1',gestor);

    return this.http.post<Gestor>(ConfigUrl.DEFAULT_URL+'/insert', jsonGestor, httpOptions);
  }

  public insertAdministrador(administrador:Object): Observable<Administrador>{
    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    var jsonAdministrador = JsonGenerate.getJson('','Administrador','1',administrador);

    return this.http.post<Administrador>(ConfigUrl.DEFAULT_URL+'/insert', jsonAdministrador, httpOptions);
  }

}
