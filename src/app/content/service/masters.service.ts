import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MastersService {
  URL = environment.httpUrl;

  constructor(private http:HttpClient) { }

  getLanguageList():Observable<any>{
    return this.http.get(`${this.URL}languages/list`).pipe(
      catchError(this.errorHandler)
    )
  }

  getBloodGroupList():Observable<any>{
    return this.http.get(`${this.URL}bloodgroups/list`).pipe(
      catchError(this.errorHandler)
    )
  }

  getStatusList():Observable<any>{
    return this.http.get(`${this.URL}ride/status`).pipe(
      catchError(this.errorHandler)
    )
  }

  createLanguage(data:any):Observable<any>{
    return this.http.post(`${this.URL}languages/create`,data).pipe(
      catchError(this.errorHandler)
    )
  }

  createBloodGroup(data:any):Observable<any>{
    return this.http.post(`${this.URL}bloodgroups/create`,data).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
