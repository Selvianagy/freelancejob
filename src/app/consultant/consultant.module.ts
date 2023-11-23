import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultantRegisterComponent } from './consultant-register/consultant-register.component';
import { FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConsultantRegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ConsultantModule { }
