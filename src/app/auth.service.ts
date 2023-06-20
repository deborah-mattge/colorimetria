import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private contaCadastrada: boolean = false;
  private readonly STORAGE_KEY = 'authState';

  constructor() {
    this.contaCadastrada = this.getAuthStateFromStorage();
  }

  get isContaCadastrada(): boolean {
    return this.contaCadastrada;
  }

  setContaCadastrada(value: boolean): void {
    this.contaCadastrada = value;
    this.saveAuthStateToStorage();
  }

  private getAuthStateFromStorage(): boolean {
    const storedState = localStorage.getItem(this.STORAGE_KEY);
    return storedState ? JSON.parse(storedState) : false;
  }

  private saveAuthStateToStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.contaCadastrada));
  }
}
