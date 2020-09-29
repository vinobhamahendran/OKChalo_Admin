import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {
  token: any;
  message : any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
  signinUser(username: string, password: string) {
    
    if (username === 'sa' && password === 'ok123') {
      this.token = 1 ;
      localStorage.setItem('currentUser', this.token);
      this.message = "Login Successfully";
      localStorage.setItem('logininfo', this.message);
      if (this.activatedRoute.snapshot.queryParams.returnUrl) {
        this.router.navigate([this.activatedRoute.snapshot.queryParams.returnUrl]);
      } else {
        this.router.navigate(['/dashboard']);
      }
    }
    else{
      this.message="Username and Password is not Matched";
      localStorage.setItem('logininfo', this.message);
    }
  }

  logout() {
    this.token = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/signin']);
  }
  isAuthenticated() {
    return localStorage.getItem('currentUser');
  }
}
