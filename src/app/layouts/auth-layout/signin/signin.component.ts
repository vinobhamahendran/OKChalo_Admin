import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  loginForm : FormGroup;
  formsubmitted = false;
  message:any;
  title : any;
  icon: any;
  constructor(private router : Router, private authService: AuthService,
    private formBuilder : FormBuilder) { 
      this.loginForm = this.formBuilder.group({
        username : ['',Validators.required],
        password : ['',Validators.required]
      })
    }

  get f(){
    return this.loginForm.controls;
  }
  onSubmitSignIn() {
    this.formsubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    console.log(this.loginForm.value)
    this.authService.signinUser(this.f.username.value, this.f.password.value);
  }
}
