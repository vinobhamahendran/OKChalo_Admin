import {Component, ViewChild} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  email = new FormControl('demo@example.com');
  password = new FormControl('demo#123');
  keepMeLoggedIn = new FormControl(true);

  @ViewChild('signinForm') form: NgForm;

  constructor(private router : Router, private authService: AuthService) { }

  onSubmitSignIn() {
    this.authService.signinUser(this.email.value, this.password.value);
  }

  onSubmit(){
    this.router.navigate(['/dashboard']);
  }

}