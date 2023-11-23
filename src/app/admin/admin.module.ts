import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminregisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
