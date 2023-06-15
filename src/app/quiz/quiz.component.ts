import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  paginaAtual: string = 'quiz';

  trocarPagina(pagina: string) {
    this.paginaAtual = pagina;
  }

  salvarRespostas(): void {
    var respostas = [];
  
    var form1 = document.getElementById('form1') as HTMLFormElement;
    var pele = form1.querySelector('input[name="pele"]:checked') as HTMLInputElement;
    if (pele) {
      respostas.push({ respostaPele: pele.value });
    }
  
    var form2 = document.getElementById('form2') as HTMLFormElement;
    var cabelo = form2.querySelector('input[name="cabelo"]:checked') as HTMLInputElement;
    if (cabelo) {
      respostas.push({ respostaCabelo: cabelo.value });
      console.log(respostas[0])
    }
  
    var form3 = document.getElementById('form3') as HTMLFormElement;
    var olhos = form3.querySelector('input[name="olhos"]:checked') as HTMLInputElement;
    if (olhos) {
      respostas.push({  respostaOlhos: olhos.value });
    }
  
    var form4 = document.getElementById('form4') as HTMLFormElement;
    var veias = form4.querySelector('input[name="veias"]:checked') as HTMLInputElement;
    if (veias) {
      respostas.push({ respostaVeias: veias.value });
    }
  
    localStorage.setItem('respostas', JSON.stringify(respostas));


  
    alert("As respostas foram salvas!");
    console.log(cabelo)
  
    form1.reset();
    form2.reset();
    form3.reset();
    form4.reset();
  }

  ngOnInit(): void {
  }
  

}


