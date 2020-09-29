import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MastersService {
  URL = environment.httpUrl;

  constructor(private http:HttpClient) { }

  private _refreshNeeded=new Subject<void>();

  get refreshNeeded(){
    return this._refreshNeeded;
  }

  getLanguageList():Observable<any>{
    return this.http.get(`${this.URL}languages/list`);
  }

  getBloodGroupList():Observable<any>{
    return this.http.get(`${this.URL}bloodgroups/list`);
    
  }

  getStatusList():Observable<any>{
    return this.http.get(`${this.URL}ride/status`);
    
  }

  getMakeList():Observable<any>{
    return this.http.get(`${this.URL}make/list`);
   
  }

  createLanguage(data:any):Observable<any>{
    return this.http.post(`${this.URL}languages/create`,data).pipe(
      tap(() =>{
        this._refreshNeeded.next();
      })
    )
  }

  createBloodGroup(data:any):Observable<any>{
    return this.http.post(`${this.URL}bloodgroups/create`,data).pipe(
      tap(() =>{
        this._refreshNeeded.next();
      })
    )
  }

  createMake(data:any):Observable<any>{
    return this.http.post(`${this.URL}make/create`,data).pipe(
      tap(() =>{
        this._refreshNeeded.next();
      })
    )
  }

  getVehicleType():Observable<any>{
    return this.http.get(`${this.URL}vtype/list`)
  }
}
