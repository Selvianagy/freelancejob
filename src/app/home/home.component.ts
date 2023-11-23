import { Component,OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { PageNavigationServiceService } from '../Services/page-navigation-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private _router:Router,private pageNavigationService: PageNavigationServiceService    ){
        //this._router.navigate(['login'])

  }

  ngOnInit(): void {
    // Navigate to the stored page or default to '/login'
    const currentPage = this.pageNavigationService.getCurrentPage();
    console.log(currentPage)
    this._router.navigate([currentPage]);
  }

  
  // routtoregister(){
  //   this._router.navigate(['register'])

  // }

  

}
