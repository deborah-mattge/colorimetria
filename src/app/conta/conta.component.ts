import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


interface Conta {
  email: string;
  senha: string;
  nomeCompleto: string;
  genero: string;
  tipoPaleta : string;
}

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  contaLogada: Conta;
  contaCadastrada: number;
  listaContas: Conta[] = [];
  generoFeminino = false;
  generoMasculino = false;
  cadastro: any = {};
  contaExistente: boolean = false;
  pagina: string = 'login';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    const contas = localStorage.getItem('contas');
  if (contas) {
    this.listaContas = JSON.parse(contas);
  }
}
  valida() {
    if (this.pagina == 'login') {
      this.pagina = 'cadastro';
    } else if (this.pagina == 'cadastro') {
      this.pagina = 'login';
    } 
  }

  paginaLogada(){
    if(this.contaCadastrada==1){
      this.pagina = 'contaLogada';
    }
  }

  cadastrar() {
    if (this.cadastro.email.indexOf("@") === -1 || this.cadastro.email.indexOf(".") === -1) {
      alert('O email informado é inválido!');
      this.cadastro = {};
      this.generoFeminino = false;
      this.generoMasculino = false;
      return;
    }
      const conta: Conta = {
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      nomeCompleto: this.cadastro.nomeCompleto,
      genero: this.generoFeminino ? 'Feminino' : (this.generoMasculino ? 'Masculino' : ''),
      tipoPaleta : null
    };
 
    let contaExistente = false;
 
    for (const c of this.listaContas) {
      if (c.email === conta.email) {
        contaExistente = true;
        break;
      }
    }
    if (contaExistente) {
      alert("Esta conta já está cadastrada!");
    } else {
      this.listaContas.push(conta);
      this.salvarLocalStorage();
      this.contaCadastrada = 4;
      this.cadastro = {};
      this.generoFeminino = false;
      this.generoMasculino = false;
    }
    this.authService.setContaCadastrada(false);
  }

  atualizarContaLogada() {
    const contaLogada = JSON.parse(localStorage.getItem('Conta logada'));
    contaLogada.tipoPaleta = this.authService.getResultadoQuiz(); 
    localStorage.setItem('Conta logada', JSON.stringify(contaLogada)); 

    const listaContas = JSON.parse(localStorage.getItem('contas'));
    if (listaContas && Array.isArray(listaContas)) {
      this.listaContas = listaContas;
  
      for (let i = 0; i < this.listaContas.length; i++) {
        if (this.listaContas[i].email === contaLogada.email) {
          this.listaContas[i].tipoPaleta = contaLogada.tipoPaleta;
          break;
        }
      }
  
      localStorage.setItem('contas', JSON.stringify(this.listaContas));
    }
}

  login() {
    const emailLogin = this.cadastro.email;
    const senhaLogin = this.cadastro.senha;
    for (const conta of this.listaContas) {
      if (conta.email === emailLogin && conta.senha === senhaLogin) {
        this.contaCadastrada = 1;
        this.authService.setContaCadastrada(true);
        this.contaLogada = conta; 
        localStorage.setItem("Conta logada", JSON.stringify(this.contaLogada));
        break;
      } else {
        this.contaCadastrada = 3;
        this.authService.setContaCadastrada(false);
      }
    }
    localStorage.setItem("Número", JSON.stringify(this.contaCadastrada));

    if (this.contaCadastrada == 1) {
      this.authService.setContaCadastrada(true);
    } else {
      alert("Email ou senha inválidos!")
      this.authService.setContaCadastrada(false);
    }
    this.cadastro.email='';
    this.cadastro.senha='';
  }

  salvarLocalStorage() {
    localStorage.setItem("contas", JSON.stringify(this.listaContas));
  }
}



