import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaformComponent } from './pessoaform/pessoaform.component';
import { LoginComponent} from './login/login.component';
import { GraficoComponent} from './grafico/grafico.component';
import { InvestimentoComponent} from './investimento/investimento.component';
import { GestaoComponent } from './gestao/gestao.component';
import { TabelaInvestimentosComponent } from './tabela-investimentos/tabela-investimentos.component';
import { GraficoMinhaAcoesComponent } from './grafico-minha-acoes/grafico-minha-acoes.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { TabelaSacadosComponent } from './tabela-sacados/tabela-sacados.component';


const routes: Routes= [
  { path: 'login', component: LoginComponent},
  { path: 'formulario', component: PessoaformComponent},
  { path: 'grafico', component: GraficoComponent},  // Excluir 
  { path: 'investimento', component: InvestimentoComponent},
  { path: 'tableinv', component:TabelaInvestimentosComponent},
  { path: 'tablesac', component:TabelaSacadosComponent},
  
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'gestao', component: GestaoComponent},    // Excluir
  { path: 'graficoVendas' , component: GraficoMinhaAcoesComponent},
  { path: 'administracao' , component: AdministracaoComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
