import { Component } from '@angular/core';

@Component({
  selector: 'app-technical-register',
  templateUrl: './technical-register.component.html',
  styleUrls: ['./technical-register.component.scss']
})
export class TechnicalRegisterComponent {
  showPhoneInput = false;
  showregisternumber=false;
  profileType: string = 'freelance';
  skills: string[] = [];


  togglePhoneInput() {
    this.showPhoneInput = !this.showPhoneInput;
  }

  toggleRegisterNumberInput(){
    this.showregisternumber = !this.showregisternumber;
  }

  addSkill(skill: string): void {
    if (skill && !this.skills.includes(skill)) {
      this.skills.push(skill);
    }
  }

  removeSkill(index: number): void {
    this.skills.splice(index, 1);
  }
}
