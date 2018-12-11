import { ActivatedRoute, Router } from '@angular/router';

export class Permission{

    constructor() {}
    
    static execute(router: Router):Boolean{

      if(!localStorage.getItem('currentUser')){
        router.navigate(['login']);
        return false;
      }
      
      
      var x = JSON.parse(localStorage.getItem('currentUser'))['user'];

      if (x["tipo"]  == "ADM" ){
        if(router.url != "/administracao" && router.url != "/formulario")
          router.navigate(['administracao']);
      }else if(x["tipo"] == "INV"){
        router.navigate(['investimento']);
      }else if(x["tipo"] == "GES"){
        router.navigate(['gestao']);
      }
      return true;
    }

}