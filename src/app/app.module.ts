import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ContaComponent } from './conta/conta.component';
import { QuizComponent } from './quiz/quiz.component';
import { CombinacoesComponent } from './combinacoes/combinacoes.component';

@NgModule({
  declarations: [
    AppComponent,

    TelaInicialComponent,
    ContaComponent,
    QuizComponent,
    CombinacoesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
