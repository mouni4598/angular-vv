import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit{
  registrationForm :FormGroup;
  constructor(private formbuilder: FormBuilder){}

  ngOnInit(): void {
    this.registrationForm = this.formbuilder.group({
      username: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      termsCheckbox: [false, Validators.requiredTrue]},
      { validators :this.passwordMatchValidator
    });
  }

  onSubmit(){
    if(this.registrationForm.valid){
      console.log(this.registrationForm.value);
    }
  }

  resetForm(){
    this.registrationForm.reset();
  }

  passwordMatchValidator(formGroup: FormGroup){
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl= formGroup.get('confirmPassword');

    if(passwordControl.value === confirmPasswordControl.value){
      confirmPasswordControl.setErrors(null);
    } else{
      confirmPasswordControl.setErrors({passwordMismatch : true});
    }
  }
}
