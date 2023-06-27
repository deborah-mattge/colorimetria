import { Component } from '@angular/core';
import { ContaComponent } from './conta/conta.component';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

interface Conta {
  email: string;
  senha: string;
  nomeCompleto: string;
  genero: string;
  tipoPaleta : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colorimetria';
  constructor(private router: Router, private authService: AuthService, private contaComponent: ContaComponent){}

  contaCadastrada : number;
  contaLogada: Conta[]=[];

  permissao(){
    if(this.contaCadastrada===3){
      alert("É necessário fazer o login para ter acesso a está página!")
    }
  }

  logout(){
    this.router.navigate(['/login']);
    this.contaCadastrada=3;
    this.contaLogada= null;
    localStorage.setItem("Número", JSON.stringify(this.contaCadastrada));
    localStorage.setItem("Conta logada", JSON.stringify(this.contaLogada));
    this.authService.setContaCadastrada(false);
    this.contaLogada.splice[0]
  }

}
