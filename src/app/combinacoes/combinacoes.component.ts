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

 corDeFundo: string [] = [];



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
      'laranja ip': ['#ce2254', '#006360', '#842739'],
      'rosa ip': ['#645495', '#fefefe', '#842739'],
      'roxo ip': ['#ff818d', '853b76', 'ca3476' ],
      'amarelo ip': ['#d1d6cf', '#ff818d', '#842739'],
      'verde ip': ['#006360', '9eb83d', '#842739' ],
      'azul ip': ['#fefefe', '006360', '#5861a4'],
      'cinza ip': ['#010101', '#ff818d', '#853b76'],
      'preto ip': ['#009589', '#853b76', '#006360'],
      'branco ip': ['#853b76', '#010101','#006360' ],
      'vermelho ip':[ '#ce2254', '#ff818d', '#006360'],
      'fucsia ip': ['#fefefe', '#ff818d', '#853b76'],

      'laranja ipu': ['#e96ead', '#1e4590', '#614665'],
      'rosa ipu': ['#7b386b', '#645495', '#e9cad2'],
      'roxo ipu': ['#e9cad2', '#7b386b', '#d2d6cf'],
      'amarelo ipu':[ '#d2d6cf', '#e9cad2', '#614665' ],
      'verde ipu': ['#5bbf81', '#1e4590', '#e96ead'],
      'azul ipu': ['#9f2d68', '#52575b', '#645495'],
      'cinza ipu': ['#d3305d', '#000000', '#373c7c'],
      'preto ipu': ['#d2d6cf','#e96ead', '#614665' ],
      'branco ipu': ['#d3305d', '#7b386b','#52575b'  ],
      'vermelho ipu':[ '#d3305d', '#9f2d68','#e96ead'  ],
      'fucsia ipu': ['#d3305d', '#9f2d68','#e96ead' ],

      'laranja isu': ['#EFED98', '#1A4CA3', '#D66F7A'],
      'rosa isu': ['#F7AAFD', '#9A51A2', '#CA3474'],
      'roxo isu': ['#CADEA1', '#00575E', '#373C7C'],
      'amarelo isu': ['#9F2D6B', '#CA3474', '#1A4CA3'],
      'verde isu': ['#9F2D6B', '#D66F7A', '#49C7ED'],
      'azul isu': ['#F7AAFD', '#EFED98', '#8882A5'],
      'cinza isu': ['#EFED98', '#1A4CA3', '#373C7C'],
      'preto isu': ['#9F2D6B', '#CA3474', '#00575E'],
      'branco isu': ['#D66F7A', '#CADEA1', '#9A51A2'],
      'vermelho isu': ['#EFED98', '#1A4CA3', '#9F2D6B'],
      'fucsia isu': ['#CA3474', '#00575E', '#9A51A2'],

      'laranja oi': ['#D5C884', '#02A553', '#B85F47'],
       'rosa oi': ['#8EACA4', '#26BFC4', '#6B8ED2'],
        'roxo oi': ['#798C6F', '#F7A08C', '#523E97'],
         'amarelo oi': ['#6B0F1D', '#6B8ED2', '#CADE9F'],
          'verde oi': ['#B95F93', '#523E97', '#6B0F1D'],
          'azul oi': ['#F1A9AA', '#523E97', '#735DA6'],
           'cinza oi': ['#26BFC4', '#F1A9AA', '#8EACA4'],
            'preto oi': ['#523E97', '#735DA6', '#F1A9AA'],
             'branco oi': ['#26BFC4', '#523E97', '#02A553'],
              'vermelho oi': ['#B85F47', '#26BFC4', '#D5C884'],
               'fucsia oi': ['#6B0F1D', '#26BFC4', '#F7A08C'],


      'laranja op': ['#EC4A23', '#C3B72E', '#B85F47'],
       'rosa op': ['#656F30', '#9D202E', '#B18C33'],
        'roxo op': ['#52575B', '#373C7C', '#431C53'],
         'amarelo op': ['#FFB401', '#E7C040', '#C3B72E'],
          'verde op': ['#029142', '#656F30', '#B18C33'],
           'azul op': ['#373C7C', '#9D202E', '#EC4A23'],
            'cinza op': ['#F47820', '#EC4A23', '#52575B'],
             'preto op': ['#52575B', '#431C53', '#EC4A23'],
              'branco op': ['#373C7C', '#52575B', '#029142'],
               'vermelho op': ['#9D202E', '#373C7C', '#FFF9E2'],
            'fucsia op': ['#E7C040', '#373C7C', '#FAA68E'],

            'laranja oq': ['#903930', '#EFED97', '#339391'],
            'rosa oq': ['#645495', '#9E202E', '#818C34'],
            'roxo oq': ['#656F30', '#854522', '#645495'],
            'amarelo oq': ['#D6C985', '#EFED97', '#339391'],
            'verde oq': ['#00575E', '#656F30', '#818C34'],
            'azul oq': ['#339391', '#9E202E', '#903930'],
            'cinza oq': ['#EBC11C', '#854522', '#827E80'],
            'preto oq': ['#645495', '#OF9246', '#EBC11C'],
            'branco oq': ['#339391', '#645495', '#00575E'],
            'vermelho oq': ['#9E202E', '#339391', '#SEACA4'],
            'fucsia oq': ['#FAA68E', '#339391', '#D6C985'],

            'laranja pc': ['#6087C8', '#CBC587', '#D6394A'],
            'rosa pc': ['#F6B7C1', '#B0836A', '#BEACA4'],
            'roxo pc': ['#A4956C', '#CBC587', '#EAC6B4'],
            'amarelo pc': ['#98E3CF', '#7564A8', '#D6394A'],
            'verde pc': ['#F59F8F', '#D6394A', '#CBC587'],
            'azul pc': ['#CBC587', '#F59F8F', '#98E3CF'],
            'cinza pc': ['#7564A8', '#6087C8', '#CBC587'],
            'preto pc': ['#CBC587', '#D6394A', '#F6B7C1'],
            'branco pc': ['#6087C8', '#7564A8', '#CBC587'],
            'vermelho pc': ['#D6394A', '#CBC587', '#339391'],
            'fucsia pc': ['#BEACA4', '#CBC587', '#F59F8F'],

            'laranja pi': ['#db3741', '#fac2ab', '#FDFEF6'],
            'rosa pi': ['#FAC2AB', '#BEAED7', '#81CDCB'],
            'roxo pi': ['#BEAED7', '#8882A6', '#E78db8'],
            'amarelo pi': ['#FDFEF6', '#db3741', '#D3E828'],
            'verde pi': ['#81CDCB', '#D3E828', '#373C7C'],
            'azul pi': ['#E78db8', '#D3E828', '#FAC2AB'],
            'cinza pi': ['#FDFEF6', '#BEAED7', '#81CDCB'],
            'preto pi': ['#D3E828', '#81CDCB', '#02A552'],
            'branco pi': ['#FAC2AB', '#02A552', '#db3741'],
            'vermelho pi': ['#db3741', '#E78db8', '#81CDCB'],
            'fucsia pi': ['#C83474', '#BEAED7', '#FDFEF6'],

            'laranja pq': ['#d6394a', '#fdb501', '#72473b'],
            'rosa pq': ['#ae8569', '#e66a3d', '#fdb501'],
            'roxo pq': ['#339391', '#fb7166', '#fdb501'],
            'amarelo pq': ['#fdb501', '#fac1ab', '#e66a3d'],
            'verde pq': ['#339391', '#e66a3d', '#31a84a'],
            'azul pq': ['#339391', '#fac1ab', '#65408d'],
            'cinza pq': ['#339391', '#fac1ab', '#d6394a'],
            'preto pq': ['#339391', '#7d473b', '#ae8569'],
            'branco pq': ['#339391', '#4e4097', '#db6c7c'],
            'vermelho pq': ['#ae8569', '#b6253a', '#fb7166'],
            'fucsia pq': ['#ae8569', '#b6253a', '#fb7166'],

            'laranja vc': ['#EFED99', '#D62F5D', '#B92928'],
            'rosa vc': ['#6C5859', '#B92928', '#DA6B7B'],
            'roxo vc': ['#D62F5D', '3E97D3', '#DA6B7B'],
            'amarelo vc': ['#8EAFC2', '#B29783', '#DA6B7B'],
            'verde vc': ['#B29783', '#A1A0A6', '#EFED99'],
            'azul vc': ['#7CCDEB', '#B92928', '#DA6B7B'],
            'cinza vc': ['#E48FB8', '#3E97D3', '#6C5859'],
            'preto vc': ['#6C5859', '#EFED99', '#7CCDEB'],
            'branco vc': ['#EFED99', '#6C5859', '#7CCDEB'],
            'vermelho vc': ['#A1A0A6', '#7CCDEB', '#D62F5D'],
            'fucsia vc': ['#B92928', '#7CCDEB', '#DA6B7B'],

            'laranja vp': ['#AF8F92', '#52575B', '#645397'],
            'rosa vp': ['#788E9C', '#A1A0A6', '#E48FB8'],
            'roxo vp': ['#00575E', '#A1A0A6', '#AF8F92'],
            'amarelo vp': ['#E48FB8', '#645397', '#FB828E'],
            'verde vp': ['#9AA9CA', '#B4435F', '#F6C6D4'],
            'azul vp': ['#788E9C', '#F6C6D4', '#AF8F92'],
            'cinza vp': ['#F6C6D4', '#AF8F92', '#645397'],
            'preto vp': ['#52575B', '#F6C6D4', '#AF8F92'],
            'branco vp': ['#A1A0A6', '#AF8F92', '#E48FB8'],
            'vermelho vp': ['#9AA9CA', '#788E9C', '#B4435F'],
            'fucsia vp': ['#982652', '#89BEE6', '#AF8F92'],

            'laranja vs': ['#E4DA9D', '#D62F5D', '#992552'],
            'rosa vs': ['#9AA9CA', '#8EACA4', '#42606B'],
            'roxo vs': ['#B29784', '#42606B', '#D62F5D'],
            'amarelo vs': ['#EBC7B2', '#992552', '#9ECBD4'],
            'verde vs': ['#555B3F', '#5B6080', '#9AA9CA'],
            'azul vs': ['#81CCCF', '#D62F5D', '#9AA9CA'],
            'cinza vs': ['#9ECBD4', '#992552', '#555B3F'],
            'preto vs': ['#83677E', '#9ECBD4', '#992552'],
            'branco vs': ['#81CCCF', '#992552', '#E4DA9D'],
            'vermelho vs': ['#5B6080', '#81CCCF', '#D62F5D'],
            'fucsia vs': ['#992552', '#81CCCF', '#E4DA9D']
     
     

    };
    this.corDeFundo = combinacaoCorFundo[this.textoCombinacoes] || ['white', 'white', 'white'];
  }
  

  }
