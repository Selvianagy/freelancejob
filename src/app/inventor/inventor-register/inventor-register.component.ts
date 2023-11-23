import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-inventor-register',
  templateUrl: './inventor-register.component.html',
  styleUrls: ['./inventor-register.component.scss']
})
export class InventorRegisterComponent {
  showPhoneInput = false;

  togglePhoneInput() {
    this.showPhoneInput = !this.showPhoneInput;
  }
}
