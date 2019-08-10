import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { passwordCheckValidator } from '../form-check.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repassword: new FormControl('')
  });


  register() {
    console.log(this.registerForm.value);
  }
  constructor() { }

 



  ngOnInit() {
  }

}
