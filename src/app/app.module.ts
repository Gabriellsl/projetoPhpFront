import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //responsavel pela comunicação do html e ts
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component'; // PRIME NG
import {SplitButtonModule} from 'primeng/splitbutton';
import {CardModule} from 'primeng/card'; // Prime ng
import {DropdownModule} from 'primeng/dropdown'; // Prime 
import { MessagesComponent } from './messages/messages.component';
import { PessoaformComponent } from './pessoaform/pessoaform.component';
import { InvestimentoComponent } from './investimento/investimento.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MessagesComponent,
    PessoaformComponent,
    InvestimentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    HttpClientModule,
    CardModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
