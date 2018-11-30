import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaformComponent } from './pessoaform/pessoaform.component';
import { LoginComponent} from './login/login.component';
import { GraficoComponent} from './grafico/grafico.component';
import { InvestimentoComponent} from './investimento/investimento.component';
import { GestaoComponent } from './gestao/gestao.component';

const routes: Routes= [
  { path: 'login', component: LoginComponent},
  { path: 'formulario', component: PessoaformComponent},
  { path: 'grafico', component: GraficoComponent},
  { path: 'investimento', component: InvestimentoComponent},
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'gestao', component: GestaoComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
