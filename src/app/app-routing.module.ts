import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { ConsultantRegisterComponent } from './consultant/consultant-register/consultant-register.component';
import { HomeComponent } from './home/home.component';
import { InventorRegisterComponent } from './inventor/inventor-register/inventor-register.component';
import { TechnicalRegisterComponent } from './technical/technical-register/technical-register.component';


const routes: Routes = [
  {path:'',component:HomeComponent,
  children:[
    {path:'consultantregister',component:ConsultantRegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'inventorregister',component:InventorRegisterComponent},
    {path:'technicalregister',component:TechnicalRegisterComponent},
        ]},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]

})
export class AppRoutingModule { }
