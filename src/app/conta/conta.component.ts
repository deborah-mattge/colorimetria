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
  contaLogada: Conta[]=[];
  contaCadastrada: number;
  nome: string;
  listaContas: Conta[] = [];
  generoFeminino = false;
  generoMasculino = false;
  cadastro: any = {};
  contaExistente: boolean = false;
  pagina: string = 'login';
  respostasPaletas: any= {};

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

    for (const conta of this.listaContas) {
      if (conta.email === emailLogin && conta.senha === senhaLogin) {
        this.contaCadastrada = 1;
        this.contaLogada=this.listaContas;
        localStorage.setItem("Conta logada", JSON.stringify(this.contaLogada));
        break;
      } else {
        this.contaCadastrada = 3;
      }
    }
    localStorage.setItem("Número", JSON.stringify(this.contaCadastrada));

    if (this.contaCadastrada == 1) {
      this.authService.setContaCadastrada(true);
      this.router.navigate(['/quiz']);
      
    } else {
      this.mensagemContaCadastrada = 'Conta não cadastrada';
      console.log('Esta conta não está cadastrada');
    }
    this.cadastro.email='';
    this.cadastro.senha='';
    console.log(this.valida)
  }
  
  

  salvarLocalStorage() {
    localStorage.setItem("contas", JSON.stringify(this.listaContas));
  }
  logout(){
    this.contaCadastrada=3;
    this.authService.setContaCadastrada(false);
  }

}
