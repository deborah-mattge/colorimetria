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

  constructor(private router: Router, private authService: AuthService) { }

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
    if (this.cadastro.email.indexOf("@") === -1 || this.cadastro.email.indexOf(".") === -1) {
      alert('O email informado é inválido.');
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
    }
    console.log("teste teste"+ contaCadastrada)
    localStorage.setItem("Conta Logada", JSON.stringify(this.contaCadastrada));

    if (contaCadastrada == 1) {
      this.authService.setContaCadastrada(true);
      this.router.navigate(['/quiz']);
    } else {
      this.mensagemContaCadastrada = 'Conta não cadastrada';
      console.log('Esta conta não está cadastrada');
    }
    this.cadastro.email='';
    this.cadastro.senha='';
  }

  salvarLocalStorage() {
    localStorage.setItem("contas", JSON.stringify(this.listaContas));
  }
  logout(){
    this.contaCadastrada=3;
  }

}
