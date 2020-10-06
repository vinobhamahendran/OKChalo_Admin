import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {
  constructor(private notify : NotificationService){}
  errorMessage: any;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (!navigator.onLine) {
          this.errorMessage = 'No Internet Connection';
        } else {
          this.errorMessage = error.error.message;
        }  
        this.notify.showError(this.errorMessage);    
        return throwError(this.errorMessage);
      })
    )
  }
  
}
