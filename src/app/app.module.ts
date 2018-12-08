import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //responsavel pela comunicação do html e ts
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component'; // Prime ng
import { SplitButtonModule } from 'primeng/splitbutton';
import { CardModule } from 'primeng/card'; // Prime ng
import { DropdownModule } from 'primeng/dropdown'; // Prime ng
import {SpinnerModule} from 'primeng/spinner'; // Prime ng
import { PessoaformComponent } from './pessoaform/pessoaform.component';
import { InvestimentoComponent } from './investimento/investimento.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import {ChartModule} from 'primeng/chart';
import { GraficoComponent } from './grafico/grafico.component';
import { TabelaInvestimentosComponent } from './tabela-investimentos/tabela-investimentos.component';
import { GestaoComponent } from './gestao/gestao.component';
import { TabelaSacadosComponent } from './tabela-sacados/tabela-sacados.component';
import { GraficoMinhaAcoesComponent } from './grafico-minha-acoes/grafico-minha-acoes.component';
import {CalendarModule} from 'primeng/calendar';
import {SidebarModule} from 'primeng/sidebar';
import { AdministracaoComponent } from './administracao/administracao.component';

import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PessoaformComponent,
    InvestimentoComponent,
    GraficoComponent,
    TabelaInvestimentosComponent,
    GestaoComponent,
    TabelaSacadosComponent,
    GraficoMinhaAcoesComponent,
    AdministracaoComponent
   
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    HttpClientModule,
    CardModule,
    DropdownModule,
    AppRoutingModule,
    CommonModule,
    ChartModule,
    SpinnerModule,
    CalendarModule,
    SidebarModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
