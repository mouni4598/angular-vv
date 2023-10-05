import { Component } from '@angular/core';
import { Employees } from '../employees';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
employees = new Employees;
msg='';

registerUser(){

}

reset(){
  this.employees = new Employees();
  this.msg = '';
}

}
