import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ContaComponent } from './conta/conta.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private contaComponent: ContaComponent) {}

  canActivate(): boolean {
    if (this.contaComponent.contaCadastrada === 1) {
      return true;
    } else {
      this.router.navigate(['/conta']); 
      return false;
    }
  }
}
