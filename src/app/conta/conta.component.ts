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
  contaLogada: Conta;
  contaCadastrada: number;
  nome: string;
  listaContas: Conta[] = [];
  generoFeminino = false;
  generoMasculino = false;
  cadastro: any = {};
  contaExistente: boolean = false;
  pagina: string = 'login';
  resultadoQuiz: string | null = null;

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
      }
    }
    localStorage.setItem("Número", JSON.stringify(this.contaCadastrada));

    if (this.contaCadastrada == 1) {
      this.authService.setContaCadastrada(true);
      this.router.navigate(['/quiz']);
     
    } else {
      this.mensagemContaCadastrada = 'Conta não cadastrada';
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



