import { Component, OnInit } from '@angular/core';

interface Conta {
  email: string;
  senha: string;
  nomeCompleto: string;
  genero: string;
}

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    const contasADD = localStorage.getItem("contas");
    if (contasADD) {
      this.contas = JSON.parse(contasADD);
    }

  }

  mensagemContaCadastrada: string = '';
  contaCadastrada: number;
  nome: string;
  contas: Conta[] = [];
  generoFeminino = false;
  generoMasculino = false;
  cadastro: any = {};

  pagina: string = 'login';

  mudarPagina(page: string) {
    this.pagina = page;
  }

  valida() {
    if (this.pagina == 'login') {
      this.pagina = 'cadastro';
    } else if (this.pagina == 'cadastro') {
      this.pagina = 'login';
    }
  }

  comecarTeste() {
    const conta: Conta = {
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      nomeCompleto: this.cadastro.nomeCompleto,
      genero: this.generoFeminino ? 'Feminino' : (this.generoMasculino ? 'Masculino' : '')
    };

    this.contas.push(conta);
    console.log(this.contas);

    this.salvarLocalStorage();

    this.cadastro = {};
    this.generoFeminino = false;
    this.generoMasculino = false;
  }

  validarConta() {
    const emailLogin = this.cadastro.email;
    const senhaLogin = this.cadastro.senha;

    console.log(senhaLogin)
  
    let contaCadastrada = 0;
  
    for (let i = 0; i < this.contas.length; i++) {
      if (this.contas[i].email === emailLogin && this.contas[i].senha === senhaLogin) {
        contaCadastrada=1;
        break;
      } else {
        contaCadastrada=3;
      }
    }
      if (contaCadastrada==1) {
        this.mensagemContaCadastrada = 'Conta já cadastrada';
        console.log('Esta conta já está cadastrada');
        
      } else if(contaCadastrada==3) {
        this.mensagemContaCadastrada = 'Conta não cadastrada';
        console.log('Esta conta não está cadastrada');
      }
    }
  
    salvarLocalStorage() {
      localStorage.setItem("contas", JSON.stringify(this.contas));
    }

  }
