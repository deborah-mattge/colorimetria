import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EncrDecrService } from '../services/AESEncryptDecryptService';



interface Conta {
  email: string;
  senha: string;
  nomeCompleto: string;
  dataNascimento: string;
  genero: string;
  tipoPaleta: string;
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
  }

  valida() {
    if (this.pagina == 'login') {
      this.pagina = 'cadastro';
    } else if (this.pagina == 'cadastro') {
      this.pagina = 'login';
    }
  }

  paginaLogada() {
    if (this.contaCadastrada == 1) {
      this.pagina = 'contaLogada';
    }
  }

  cadastrar() {

    const resultadoValidacao = 
    this.validar(this.cadastro.email, this.cadastro.senha, 
                 this.cadastro.nomeCompleto, this.cadastro.dataNascimento,
                 this.generoFeminino ? 'Feminino' : (this.generoMasculino ? 'Masculino' : ''));
  
    if (resultadoValidacao==true) {
      const conta: Conta = {
        email: this.cadastro.email,
        senha: this.cadastro.senha,
        nomeCompleto: this.cadastro.nomeCompleto,
        dataNascimento: this.cadastro.dataNascimento,
        genero: this.generoFeminino ? 'Feminino' : (this.generoMasculino ? 'Masculino' : ''),
        tipoPaleta: null
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
        localStorage.setItem("Conta logada", JSON.stringify(this.contaLogada));

        break;
      }
    }
  }


    if (this.contaCadastrada == 1) {
      this.authService.setContaCadastrada(true);
    } else {
      alert("Email ou senha inválidos!")
      this.authService.setContaCadastrada(false);
    }
    this.cadastro.email = '';
    this.cadastro.senha = '';
  }


  salvarLocalStorage() {
    localStorage.setItem("contas", JSON.stringify(this.listaContas));
  }


  validar(email, senha, nomeCompleto, dataNascimento, genero): boolean{
    console.log(genero)
    if (!email.includes('.') || !email.includes('@')) {
       alert ("Email inválido. Certifique-se de que contém pelo menos um ponto (.) e um @.");
       return false
    }
  
    // Verificar se a senha tem mais de 8 caracteres
    if (senha.length < 8) {
       alert ("Senha inválida. A senha deve conter mais de 8 caracteres.");
       return false
    }
  
    // Verificar se o nome tem pelo menos 6 caracteres
    if (nomeCompleto.length < 6) {
       alert ("Nome inválido. O nome deve conter pelo menos 6 caracteres.");
       return false
    }
  
    // Verificar se a data de nascimento foi informada
    if (!dataNascimento) {
       alert ("Data de nascimento não informada.");
       return false
    }
  
    // Verificar se o gênero foi informado
    if (!genero) {
       alert ("Gênero não informado.");
       return false
    }
  
    // Se todas as validações passaram, retornar true para indicar que os dados são válidos
    return true;
  }
 
}



