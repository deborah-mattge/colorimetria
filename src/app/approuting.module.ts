import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContaComponent } from "./conta/conta.component"
import { TelaInicialComponent } from "./tela-inicial/tela-inicial.component"
import { QuizComponent } from "./quiz/quiz.component"
import { CombinacoesComponent } from "./combinacoes/combinacoes.component"

const rotas: Routes=[
{path:'telainicial', component:TelaInicialComponent},
{path:'conta', component:ContaComponent},
{path:'quiz', component:QuizComponent},
{path:'combinacoes', component:CombinacoesComponent},
{path:'',redirectTo:'telainicial',pathMatch:'full'}

];

@NgModule({
    imports:[RouterModule.forRoot(rotas)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}