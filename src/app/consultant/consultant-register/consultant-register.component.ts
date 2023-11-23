import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-consultant-register',
  templateUrl: './consultant-register.component.html',
  styleUrls: ['./consultant-register.component.scss']
})
export class ConsultantRegisterComponent  {

  //consultantForm: FormGroup 

   //constructor(private fb: FormBuilder) {
  //   this.consultantForm = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     consultantType: ['', Validators.required],
  //     country: ['', Validators.required],
  //     birthDate: ['', Validators.required],
  //     currentJob: [''],
  //     phoneNumber: ['']
  //   });
  // }

  // ngOnInit(): void {
    
  // }

  // onSubmit() {
  //   // Handle form submission here
  //   console.log(this.consultantForm.value);
  // }
  showPhoneInput = false;

  togglePhoneInput() {
    this.showPhoneInput = !this.showPhoneInput;
  }
}
