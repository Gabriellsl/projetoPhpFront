import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaformComponent } from './pessoaform/pessoaform.component';
import { LoginComponent} from './login/login.component';
import { GraficoComponent} from './grafico/grafico.component';
import { InvestimentoComponent} from './investimento/investimento.component';
import { TabelaInvestimentosComponent } from './tabela-investimentos/tabela-investimentos.component';


const routes: Routes= [
  { path: 'login', component: LoginComponent},
  { path: 'formulario', component: PessoaformComponent},
  { path: 'grafico', component: GraficoComponent},
  { path: 'investimento', component: InvestimentoComponent},
  { path: 'tableinv', component:TabelaInvestimentosComponent},
  { path: '', redirectTo: '/login', pathMatch:'full'},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
