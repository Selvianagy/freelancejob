import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventorRegisterComponent } from './inventor-register/inventor-register.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InventorRegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class InventorModule { }
