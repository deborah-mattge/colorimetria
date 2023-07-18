import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EncrDecrService } from '../services/AESEncryptDecryptService';



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

  constructor(private router: Router, private authService: AuthService,
    private EncrDecr: EncrDecrService) { }

    

  ngOnInit() {
    const contas = localStorage.getItem('contas');
  if (contas) {
    this.listaContas = JSON.parse(contas);
  } 
      localStorage.getItem("Conta logada");

      console.log(this.contaLogada)

    
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
      email: this.EncrDecr.set('123456$#@$^@1ERF', this.cadastro.email),
      senha: this.EncrDecr.set('123456$#@$^@1ERF', this.cadastro.senha), 
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
  
      this.salvarLocalStorage(); 
    }
}

login() {
  const emailLogin = this.cadastro.email;
  const senhaLogin = this.cadastro.senha;
  for (const conta of this.listaContas) {
    const emailSemCriptografia = this.EncrDecr.get('123456$#@$^@1ERF', conta.email);
    if (emailSemCriptografia === emailLogin.toString()) {
      const senhaSemCriptografia = this.EncrDecr.get('123456$#@$^@1ERF', conta.senha);
      if (senhaSemCriptografia === senhaLogin.toString()) { 
        this.contaCadastrada = 1;
        this.contaLogada = conta; 
        break;
      }
    }
  }

  if (this.contaCadastrada === 3) {
  }

  localStorage.setItem("Número", JSON.stringify(this.contaCadastrada));

  if (this.contaCadastrada === 1) {
    this.authService.setContaCadastrada(true);
  } else {
    alert("Email ou senha inválidos!");
    this.authService.setContaCadastrada(false);
  }

  this.cadastro.email = '';
  this.cadastro.senha = '';
}

  salvarLocalStorage() {
    localStorage.setItem("contas", JSON.stringify(this.listaContas));
  }

}


