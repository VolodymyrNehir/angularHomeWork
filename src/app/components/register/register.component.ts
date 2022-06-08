import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form: FormGroup;
uf: null;
  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm():void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(2)])
    }, [this.checkPasswords])
  }

  register() {
    console.log(this.form)
  };
  checkPasswords(form:AbstractControl): ValidationErrors | null{
    const password = form.get('password')
    const confirmPassword = form.get('confirmPassword')
    return password?.value === confirmPassword?.value ? null:{notSame: true}
  }
}
