import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '@app/content/service/notification.service';

@Injectable()
export class AuthService {
  token: any;
  message: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private notify: NotificationService) {
  }
  signinUser(username: string, password: string) {

    if (username === 'okchalo' && password === '123') {
      this.token = 6;
      localStorage.setItem('currentUser', this.token);
      this.message = "Login Successfully";
      this.notify.showSuccess(this.message);
      if (this.activatedRoute.snapshot.queryParams.returnUrl) {
        this.router.navigate([this.activatedRoute.snapshot.queryParams.returnUrl]);
      } else {
        this.router.navigate(['/dashboard']);
      }
    }
    else {
      this.message = "Username and Password is not Matched";
      this.notify.showError(this.message);

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
