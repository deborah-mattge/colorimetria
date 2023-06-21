import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-combinacoes',
  templateUrl: './combinacoes.component.html',
  styleUrls: ['./combinacoes.component.css']
})
export class CombinacoesComponent implements OnInit {


 constructor() { }


 respostasc: any= {};
 respostasPaletas: any= {};
 textoCombinacoes: string = '';
 corDeFundo: string;


 ngOnInit(): void {
 
   const resultadosSalvos = localStorage.getItem('respostasc');
   if (resultadosSalvos) {
     this.respostasc = JSON.parse(resultadosSalvos);
   }
   const resultados2Salvos = localStorage.getItem('respostasPaletas');
   if (resultados2Salvos) {
     this.respostasPaletas = JSON.parse(resultados2Salvos);
   }
 }


 salvarRespostas(): void {
  this.respostasc = {}; // Limpa o objeto de respostas antes de salvar as novas


  const form1 = document.getElementById('form1') as HTMLFormElement;
  const peca = form1.querySelector('input[name="peca"]:checked') as HTMLInputElement;
  if (peca) {
    this.respostasc.respostapeca = peca.value;
  }


  const form2 = document.getElementById('form2') as HTMLFormElement;
  const cor = form2.querySelector('input[name="cor"]:checked') as HTMLInputElement;
  if (cor) {
    this.respostasc.respostacor = cor.value;
  }


  localStorage.setItem('respostasc', JSON.stringify(this.respostasc));
  this.exibirTextoEspecifico();






  console.log(this.respostasc);
  console.log(this.respostasPaletas)
}




  paginaAtual: string = 'combinacoes';


  trocarPagina(pagina: string) {
    this.paginaAtual = pagina;
  }


  exibirTextoEspecifico(): void {
    const respostacor = this.respostasc.respostacor;
    const cores = {
      Rosa: 'rosa',
      Vermelho: 'vermelho',
      Roxo: 'roxo',
      Fúcsia: 'fucsia',
      'Azul Escuro': 'azul',
      'Azul Claro': 'azul',
      Marrom: 'marrom',
      'Verde Claro':'verde',
      'Verde Escuro':'verde',
      Amarelo:'amarelo',
      Laranja:'laranja',
      Branco:'branco',
      Preto:'preto',
      Cinza:'cinza'
     
    };


    const combinacoes = {
      'Inverno Profundo': 'ip',
      'Inverno Puro': 'ipu',
      'Inverno Suave': 'isu',
      'Outono Intenso': 'oi',
      'Outono Profundo': 'op',
      'Outono Quente': 'oq',
      'Primavera Clara': 'pc',
      'Primavera Intensa': 'pi',
      'Primavera Quente': 'pq',
      'Verão Claro': 'vc',
      'Verão Puro': 'vp',
      'Verão Suave': 'vs'
    };
 
    if (cores[respostacor]) {
      this.textoCombinacoes = `Cor selecionada: ${respostacor}`;
      const cor = cores[respostacor];
      const combinacao = combinacoes[this.respostasPaletas];
      if (combinacao) {
        this.textoCombinacoes = `${cor} ${combinacao}`;
      }
    }
    const combinacaoCorFundo = {
      'laranja ip': 'blue',
      'rosa ip': 'blue',
      'roxo ip': 'blue',
      'amarelo ip': 'blue',
      'verde ip': 'blue',
      'azul ip': 'blue',
      'cinza ip': 'blue',
      'preto ip': 'blue',
      'branco ip': 'blue',
      'vermelho ip': 'blue',
      'fucsia ip': 'blue',
      'cinza vc': 'blue',
      'preto vc': 'blue',
      'branco vc': 'blue'


    };
    this.corDeFundo = combinacaoCorFundo[this.textoCombinacoes] || 'white';
   
  }
 
 
  }
