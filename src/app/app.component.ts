import { Component } from '@angular/core';
import { ContaComponent } from './conta/conta.component';
import { AuthService } from './auth.service';

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
  constructor(private authService: AuthService){}

  contaCadastrada : number;
  contaLogada: Conta[]=[];

  logout(){
    this.contaCadastrada=3;
    this.contaLogada= null;
    localStorage.setItem("Número", JSON.stringify(this.contaCadastrada));
    localStorage.setItem("Conta logada", JSON.stringify(this.contaLogada));
    console.log("Acontece "+this.contaCadastrada);
    this.authService.setContaCadastrada(false);
  }

}
