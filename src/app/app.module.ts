import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { ConsultantRegisterComponent } from './consultant/consultant-register/consultant-register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterLink, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventorRegisterComponent } from './inventor/inventor-register/inventor-register.component';
import { TechnicalRegisterComponent } from './technical/technical-register/technical-register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminregisterComponent,
    ConsultantRegisterComponent,
    HomeComponent,
    InventorRegisterComponent,
    TechnicalRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    RouterLink,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
