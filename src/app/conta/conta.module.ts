import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncrDecrService } from '../services/AESEncryptDecryptService';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [EncrDecrService],
})
export class ContaModule { }
