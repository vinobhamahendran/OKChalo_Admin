import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PassengersService {
  URL =environment.httpUrl;
  constructor(private http: HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get(`${this.URL}customers/list`);
  }
}
