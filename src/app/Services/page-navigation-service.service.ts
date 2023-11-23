import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageNavigationServiceService {

  private currentPage!: string;  

  setCurrentPage(page: string): void {
    localStorage.setItem('currentpage', page);
    this.currentPage=page
  }

  getCurrentPage(): string {
    this.currentPage = localStorage.getItem('currentpage')||'/login';
    console.log(this.currentPage)

    return this.currentPage;
  }
}
