import { Component } from '@angular/core';
import { PageNavigationServiceService } from '../Services/page-navigation-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor( private router: Router,   private pageNavigationService: PageNavigationServiceService
    ){}
  
  selectedRole: string | undefined;

  selectRole(role: string): void {
    this.selectedRole = role;
  }
  navigateTo(page: string): void {
    this.pageNavigationService.setCurrentPage(page);
    this.router.navigate([page]);
  }
  


}

