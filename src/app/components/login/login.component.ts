import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;

  constructor(private authService:AuthService, private router:Router) {
    this.createForm();
  }

  ngOnInit(): void {
  }
createForm():void{
    this.form = new FormGroup({
    username: new FormControl(null),
    password: new  FormControl(null)
  })
}

  login() {
this.authService.login(this.form.getRawValue()).subscribe(value =>{
this.authService.setToken(value)
this.router.navigate(['cars'])}
)
  }
}
