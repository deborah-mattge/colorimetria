import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  constructor() { }
  ngOnInit(){
    const contasADD=localStorage.getItem("contas")
    if(contasADD){
      this.contas = JSON.parse(contasADD)
    }
  }
  nome : string
  contas: string[] = [];

  cadastrarNome(nome:string){
    console.log(this.nome)
    this.contas.push(this.nome);
    console.log(this.contas)  
    this.salvarLocalStorage()
    this.nome='';
    

  }
  currentPage: string = 'login';
  
  changePage(page: string) {
    this.currentPage = page;
  }

  valida(){
    if(this.currentPage=='login'){
      this.currentPage='cadastro';
    } else if(this.currentPage=='cadastro'){
      this.currentPage='login';
    }
  }

  
  salvarLocalStorage(){
    localStorage.setItem("contas",JSON.stringify(this.contas))
  }
}