import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigUrl } from '../configUrl';
import { JsonGenerate } from '../JSONS/jsonGenerate';
import { Observable } from 'rxjs';
import { Gestor } from '../model/gestor';
import { Administrador} from '../model/administrador';
import { JsonDefault } from '../JSONS/jsonDefault';
import { Investidor } from '../model/investidor';

@Injectable({
  providedIn: 'root'
})

export class PessoaFormService {

  constructor(
    private http: HttpClient
  ) { }

  public insertPessoa(pessoa:Pessoa): Observable<Pessoa>{
    
    var httpOptions = JsonDefault.getHeaders();
    var jsonPessoa = JsonGenerate.getJson('',"Pessoa",'1',pessoa);


    return this.http.post<Pessoa>(ConfigUrl.DEFAULT_URL+'/insert', jsonPessoa, httpOptions);
  }

  public insertGestor(gestor:Gestor): Observable<Gestor>{
    
    var httpOptions = JsonDefault.getHeaders();
    var jsonGestor = JsonGenerate.getJson('','Gestor','1',gestor);

    console.log(jsonGestor);

    return this.http.post<Gestor>(ConfigUrl.DEFAULT_URL+'/insert', jsonGestor, httpOptions);
  }

  public insertAdministrador(administrador:Administrador): Observable<Administrador>{
    
    var httpOptions = JsonDefault.getHeaders();
    var jsonAdministrador = JsonGenerate.getJson('','Administrador','1',administrador);
    return this.http.post<Administrador>(ConfigUrl.DEFAULT_URL+'/insert', jsonAdministrador, httpOptions);
  }

  public insertInvestidor(investidor:Investidor): Observable<Investidor>{
    
    var httpOptions = JsonDefault.getHeaders();
    var jsonInvestidor = JsonGenerate.getJson('','Investidor','1',investidor);

    return this.http.post<Investidor>(ConfigUrl.DEFAULT_URL+'/insert', jsonInvestidor, httpOptions);
  }

}
