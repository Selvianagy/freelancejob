import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalRegisterComponent } from './technical-register/technical-register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TechnicalRegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class TechnicalModule { }
