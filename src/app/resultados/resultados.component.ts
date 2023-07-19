import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  respostasPaletas: any;

  constructor() { }

  ngOnInit(): void {
    const respostas2String = localStorage.getItem('respostasPaletas');
    if (respostas2String) {
      this.respostasPaletas = JSON.parse(respostas2String);
  }

  }
}