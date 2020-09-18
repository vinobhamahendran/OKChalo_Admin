import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  URL = environment.httpUrl;

  constructor(private http : HttpClient) { }

  createAdmin(data:any):Observable<any>{
    return this.http.post(`${this.URL}admin/create`, data);
  }
}
