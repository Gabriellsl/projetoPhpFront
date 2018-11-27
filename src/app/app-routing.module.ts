import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaformComponent } from './pessoaform/pessoaform.component';
import { LoginComponent} from './login/login.component';

const routes: Routes= [
  { path: 'formulario', component: PessoaformComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/formulario', pathMatch:'full'},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
