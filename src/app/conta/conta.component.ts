import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  mensagemContaCadastrada: string = '';
  contaLogada: boolean;
  contaCadastrada: number;
  nome: string;
  listaContas: Conta[] = [];
  generoFeminino = false;
  generoMasculino = false;
  cadastro: any = {};
  contaExistente: boolean = false;
  pagina: string = 'login';

  constructor(private router: Router) { }

  ngOnInit() {
    const contasADD = localStorage.getItem("contas");
    if (contasADD) {
      this.listaContas = JSON.parse(contasADD);
    }
  }

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

  cadastrar() {
    const conta: Conta = {
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      nomeCompleto: this.cadastro.nomeCompleto,
      genero: this.generoFeminino ? 'Feminino' : (this.generoMasculino ? 'Masculino' : '')
    };
  
    let contaExistente = false;
  
    for (const c of this.listaContas) {
      if (c.email === conta.email) {
        console.log("Conta já cadastrada");
        contaExistente = true;
        break;
      }
    }
  
    if (contaExistente) {
      alert("Esta conta já está cadastrada.");
    } else {
      this.listaContas.push(conta);
      console.log(this.listaContas);
      this.salvarLocalStorage();
      this.contaCadastrada = 4;
      this.cadastro = {};
      this.generoFeminino = false;
      this.generoMasculino = false;
    }
  }
  

  login() {
    const emailLogin = this.cadastro.email;
    const senhaLogin = this.cadastro.senha;
    let contaCadastrada = 0;

    for (const conta of this.listaContas) {
      if (conta.email === emailLogin && conta.senha === senhaLogin) {
        contaCadastrada = 1;
        console.log('entrou');
        break;
      } else {
        contaCadastrada = 3;
      }
      event.preventDefault();
    }

    if (contaCadastrada == 1) {
      console.log(contaCadastrada);
      console.log('Esta conta já está cadastrada');
      this.router.navigate(['/quiz']);
      
    } else if (contaCadastrada == 3) {
      alert("Esta conta é inexistente.");
      console.log('Esta conta não está cadastrada');
    }
  }

  salvarLocalStorage() {
    localStorage.setItem("contas", JSON.stringify(this.listaContas));
  }

}
