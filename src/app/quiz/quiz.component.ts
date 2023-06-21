import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  paginaAtual: string = 'quiz';
  respostas: any = {}; // Objeto para armazenar as respostas
  textoEspecifico: string = '';
  imagemEspecifica: string;
  respostasPaletas: any = {};

  trocarPagina(pagina: string) {
    this.paginaAtual = pagina;
  }

  salvarRespostas(): void {
    this.respostas = {}; // Limpa o objeto de respostas antes de salvar as novas

    const form1 = document.getElementById('form1') as HTMLFormElement;
    const pele = form1.querySelector('input[name="pele"]:checked') as HTMLInputElement;
    if (pele) {
      this.respostas.respostaPele = pele.value;
    }

    const form2 = document.getElementById('form2') as HTMLFormElement;
    const cabelo = form2.querySelector('input[name="cabelo"]:checked') as HTMLInputElement;
    if (cabelo) {
      this.respostas.respostaCabelo = cabelo.value;
    }

    const form3 = document.getElementById('form3') as HTMLFormElement;
    const olhos = form3.querySelector('input[name="olhos"]:checked') as HTMLInputElement;
    if (olhos) {
      this.respostas.respostaOlhos = olhos.value;
    }

    const form4 = document.getElementById('form4') as HTMLFormElement;
    const veias = form4.querySelector('input[name="veias"]:checked') as HTMLInputElement;
    if (veias) {
      this.respostas.respostaVeias = veias.value;
    }

  }

  ngOnInit(): void {
    const respostasString = localStorage.getItem('respostas');
    if (respostasString) {
      this.respostas = JSON.parse(respostasString);
    
    }
    const respostas2String = localStorage.getItem('respostasPaletas');
    if (respostas2String) {
      this.respostasPaletas = JSON.parse(respostas2String);
    }
  }

  exibirTextoEspecifico(): void {
    const respostaPele = this.respostas.respostaPele;
    const respostaCabelo = this.respostas.respostaCabelo;
    const respostaOlhos = this.respostas.respostaOlhos;
    const respostaVeias = this.respostas.respostaVeias;
  
    //primavera quente
    if (respostaPele === 'quente' && respostaCabelo === 'loiro' && respostaOlhos === 'castanho' && respostaVeias === 'verde') {
      this.textoEspecifico = 'Primavera Quente';
    } else if (respostaPele === 'quente' && respostaCabelo === 'loiro' && respostaOlhos === 'castanho' && respostaVeias === 'azul') {
      this.textoEspecifico = 'Primavera Quente';
    } else if (respostaPele === 'quente' && respostaCabelo === 'ruivo' && respostaOlhos === 'azul' && respostaVeias === 'verde') {
      this.textoEspecifico = 'Primavera Quente';
    } else if (respostaPele === 'quente' && respostaCabelo === 'ruivo' && respostaOlhos === 'azul' && respostaVeias === 'azul') {
      this.textoEspecifico = 'Primavera Quente';
    } else if (respostaPele === 'quente' && respostaCabelo === 'loiro' && respostaOlhos === 'verde' && respostaVeias === 'verde') {
      this.textoEspecifico = 'Primavera Quente';
    } else if (respostaPele === 'quente' && respostaCabelo === 'loiro' && respostaOlhos === 'verde' && respostaVeias === 'azul') {
      this.textoEspecifico = 'Primavera Quente';
    } else if (respostaPele === 'quente' && respostaCabelo === 'loiro' && respostaOlhos === 'azul' && respostaVeias === 'verde') {
      this.textoEspecifico = 'Primavera Quente';
    } else if (respostaPele === 'quente' && respostaCabelo === 'loiro' && respostaOlhos === 'azul' && respostaVeias === 'azul') {
      this.textoEspecifico = 'Primavera Quente';
      //primavera Intensa
    } else if (respostaPele === 'neutra' && respostaCabelo === 'ruivo' && respostaOlhos === 'verde' && respostaVeias === 'verde') {
      this.textoEspecifico = 'Primavera Intensa';
    } else if (respostaPele === 'neutra' && respostaCabelo === 'castanho' && respostaOlhos === 'verde' && respostaVeias === 'verde') {
      this.textoEspecifico = 'Primavera Intensa';
    } else if (respostaPele === 'neutra' && respostaCabelo === 'preto' && respostaOlhos === 'verde' && respostaVeias === 'verde') {
      this.textoEspecifico = 'Primavera Intensa';
    } else if (respostaPele === 'quente' && respostaCabelo === 'loiro' && respostaOlhos === 'preto' && respostaVeias === 'verde') {
      this.textoEspecifico = 'Primavera Intensa';
    } else if (respostaPele === 'quente' && respostaCabelo === 'loiro' && respostaOlhos === 'preto' && respostaVeias === 'azul') {
      this.textoEspecifico = 'Primavera Intensa';
      //primavera clara
    } else if (respostaPele === 'neutra' && respostaCabelo === 'ruivo' && respostaOlhos === 'azul' && respostaVeias === 'verde') {
      this.textoEspecifico = 'Primavera Clara';

    } else if (respostaPele === 'neutra' && respostaCabelo === 'ruivo' && respostaOlhos === 'castanho' && respostaVeias === 'azul') {
      this.textoEspecifico = 'Primavera Clara';

    } else if (respostaPele === 'neutra' && respostaCabelo === 'castanho' && respostaOlhos === 'verde' && respostaVeias === 'azul') {
      this.textoEspecifico = 'Primavera Clara';
      
    //outono quente
  } else if (respostaPele === 'quente' && respostaCabelo === 'ruivo' && respostaOlhos === 'castanho' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Outono Quente';
  } else if (respostaPele === 'quente' && respostaCabelo === 'castanho' && respostaOlhos === 'azul' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Outono Quente';
  } else if (respostaPele === 'quente' && respostaCabelo === 'castanho' && respostaOlhos === 'azul' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Outono Quente';
  } else if (respostaPele === 'quente' && respostaCabelo === 'ruivo' && respostaOlhos === 'castanho' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Outono Quente';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'ruivo' && respostaOlhos === 'castanho' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Outono Quente';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'ruivo' && respostaOlhos === 'verde' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Outono Quente';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'ruivo' && respostaOlhos === 'azul' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Outono Quente';
    //outono profundo
  } else if (respostaPele === 'quente' && respostaCabelo === 'preto' && respostaOlhos === 'preto' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Outono Profundo';
  } else if (respostaPele === 'quente' && respostaCabelo === 'preto' && respostaOlhos === 'preto' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Outono Profundo';
  } else if (respostaPele === 'quente' && respostaCabelo === 'castanho' && respostaOlhos === 'preto' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Outono Profundo';
  } else if (respostaPele === 'quente' && respostaCabelo === 'castanho' && respostaOlhos === 'preto' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Outono Profundo';
  } else if (respostaPele === 'quente' && respostaCabelo === 'ruivo' && respostaOlhos === 'preto' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Outono Profundo';
  } else if (respostaPele === 'quente' && respostaCabelo === 'ruivo' && respostaOlhos === 'preto' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Outono Profundo';
  } else if (respostaPele === 'quente' && respostaCabelo === 'preto' && respostaOlhos === 'verde' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Outono Profundo';
  } else if (respostaPele === 'quente' && respostaCabelo === 'preto' && respostaOlhos === 'verde' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Outono Profundo';
  } else if (respostaPele === 'quente' && respostaCabelo === 'castanho' && respostaOlhos === 'verde' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Outono Profundo';
  } else if (respostaPele === 'quente' && respostaCabelo === 'castanho' && respostaOlhos === 'verde' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Outono Profundo';
    }else if (respostaPele === 'quente' && respostaCabelo === 'preto' && respostaOlhos === 'verde' && respostaVeias === 'verde') {
      this.textoEspecifico = 'Outono Profundo';
    }else if (respostaPele === 'quente' && respostaCabelo === 'preto' && respostaOlhos === 'verde' && respostaVeias === 'azul') {
        this.textoEspecifico = 'Outono Profundo';
      }else if (respostaPele === 'quente' && respostaCabelo === 'preto' && respostaOlhos === 'castanho' && respostaVeias === 'verde') {
        this.textoEspecifico = 'Outono Profundo';
      }else if (respostaPele === 'quente' && respostaCabelo === 'preto' && respostaOlhos === 'castanho' && respostaVeias === 'azul') {
          this.textoEspecifico = 'Outono Profundo';
    //outono intenso
  } else if (respostaPele === 'quente' && respostaCabelo === 'castanho' && respostaOlhos === 'castanho' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Outono Intenso';
  } else if (respostaPele === 'quente' && respostaCabelo === 'castanho' && respostaOlhos === 'castanho' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Outono Intenso';
  } else if (respostaPele === 'quente' && respostaCabelo === 'ruivo' && respostaOlhos === 'castanho' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Outono Intenso';

  }else if (respostaPele === 'quente' && respostaCabelo === 'preto' && respostaOlhos === 'azul' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Outono Intenso';

    //verão puro
  }else if (respostaPele === 'fria' && respostaCabelo === 'loiro' && respostaOlhos === 'verde' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Verão Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'loiro' && respostaOlhos === 'verde' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Verão Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'loiro' && respostaOlhos === 'azul' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Verão Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'loiro' && respostaOlhos === 'azul' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Verão Puro';
    //verão claro
  } else if (respostaPele === 'neutra' && respostaCabelo === 'loiro' && respostaOlhos === 'verde' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Verão Claro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'loiro' && respostaOlhos === 'castanho' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Verão Claro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'loiro' && respostaOlhos === 'preto' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Verão Claro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'loiro' && respostaOlhos === 'preto' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Verão Claro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'loiro' && respostaOlhos === 'azul' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Verão Claro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'loiro' && respostaOlhos === 'azul' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Verão Claro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'castanho' && respostaOlhos === 'azul' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Verão Claro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'castanho' && respostaOlhos === 'azul' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Verão Claro';
    //verão quente
  } else if (respostaPele === 'neutra' && respostaCabelo === 'loiro' && respostaOlhos === 'verde' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Verão Quente';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'loiro' && respostaOlhos === 'castanho' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Verão Quente';
    //inverno profundo
  } else if (respostaPele === 'fria' && respostaCabelo === 'preto' && respostaOlhos === 'verde' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Profundo';
  } else if (respostaPele === 'fria' && respostaCabelo === 'preto' && respostaOlhos === 'verde' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Profundo';
  } else if (respostaPele === 'fria' && respostaCabelo === 'preto' && respostaOlhos === 'preto' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Profundo';
  } else if (respostaPele === 'fria' && respostaCabelo === 'preto' && respostaOlhos === 'preto' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Profundo';
  } else if (respostaPele === 'fria' && respostaCabelo === 'loiro' && respostaOlhos === 'preto' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Profundo';
  } else if (respostaPele === 'fria' && respostaCabelo === 'loiro' && respostaOlhos === 'preto' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Profundo';
    //inverno suave
  } else if (respostaPele === 'fria' && respostaCabelo === 'castanho' && respostaOlhos === 'verde' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Suave';
  } else if (respostaPele === 'fria' && respostaCabelo === 'castanho' && respostaOlhos === 'verde' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Suave';
  } else if (respostaPele === 'fria' && respostaCabelo === 'preto' && respostaOlhos === 'verde' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Suave';
  } else if (respostaPele === 'fria' && respostaCabelo === 'preto' && respostaOlhos === 'verde' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Suave';
  } else if (respostaPele === 'fria' && respostaCabelo === 'castanho' && respostaOlhos === 'azul' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Suave';
  } else if (respostaPele === 'fria' && respostaCabelo === 'castanho' && respostaOlhos === 'azul' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Suave';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'preto' && respostaOlhos === 'azul' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Suave';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'preto' && respostaOlhos === 'azul' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Suave';
    //inverno puro
  } else if (respostaPele === 'fria' && respostaCabelo === 'castanho' && respostaOlhos === 'castanho' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'castanho' && respostaOlhos === 'castanho' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'ruivo' && respostaOlhos === 'verde' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'ruivo' && respostaOlhos === 'verde' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'ruivo' && respostaOlhos === 'azul' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'ruivo' && respostaOlhos === 'azul' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'loiro' && respostaOlhos === 'castanho' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'castanho' && respostaOlhos === 'preto' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'castanho' && respostaOlhos === 'preto' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'ruivo' && respostaOlhos === 'preto' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'ruivo' && respostaOlhos === 'preto' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'loiro' && respostaOlhos === 'castanho' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'castanho' && respostaOlhos === 'preto' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'castanho' && respostaOlhos === 'preto' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'ruivo' && respostaOlhos === 'preto' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'ruivo' && respostaOlhos === 'preto' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'preto' && respostaOlhos === 'castanho' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'preto' && respostaOlhos === 'castanho' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'ruivo' && respostaOlhos === 'castanho' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'fria' && respostaCabelo === 'ruivo' && respostaOlhos === 'castanho' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'preto' && respostaOlhos === 'verde' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'preto' && respostaOlhos === 'castanho' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'preto' && respostaOlhos === 'castanho' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'preto' && respostaOlhos === 'preto' && respostaVeias === 'verde') {
    this.textoEspecifico = 'Inverno Puro';
  } else if (respostaPele === 'neutra' && respostaCabelo === 'preto' && respostaOlhos === 'pretos' && respostaVeias === 'azul') {
    this.textoEspecifico = 'Inverno Puro';
}

localStorage.setItem('respostasPaletas', JSON.stringify(this.textoEspecifico));
  }
  

}

