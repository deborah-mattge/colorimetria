import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combinacoes',
  templateUrl: './combinacoes.component.html',
  styleUrls: ['./combinacoes.component.css']
})
export class CombinacoesComponent implements OnInit {

 constructor() { }

 respostas: any= {}; 
 respostasPaletas: any= {};

 ngOnInit(): void {
  
   const resultadosSalvos = localStorage.getItem('respostas');
   if (resultadosSalvos) {
     this.respostas = JSON.parse(resultadosSalvos);
   }
   const resultados2Salvos = localStorage.getItem('respostasPaletas');
   if (resultados2Salvos) {
     this.respostasPaletas = JSON.parse(resultados2Salvos);
   }
 }
  paginaAtual: string = 'combinacoes';

  trocarPagina(pagina: string) {
    this.paginaAtual = pagina;
  }

}
