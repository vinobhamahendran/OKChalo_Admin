import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DriverModel } from '@app/data-db/model/driverModel';
import { catchError,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  URL = environment.httpUrl;

  constructor(private http : HttpClient) { }

  private _refreshNeeded=new Subject<void>();

  get refreshNeeded(){
    return this._refreshNeeded;
  }

  getAllDriver():Observable<any>{
    return this.http.get<any>(`${this.URL}drivers/list`).pipe(catchError(this.errorHandler))
  }

  addDriver(data:DriverModel):Observable<any>{
    return this.http.post(`${this.URL}drivers/create/`,data).pipe(
      tap(() =>{
        this._refreshNeeded.next();
      }),catchError(this.errorHandler))
  }

  getDriverById(id : number):Observable<any>{
    return this.http.get<any>(`${this.URL}drivers/get/${id}`).pipe(catchError(this.errorHandler))
  }
  getDriverByMobileno(mobile_number:any):Observable<any>{
    return this.http.get(`${this.URL}drivers/profile/${mobile_number}`).pipe(catchError(this.errorHandler))
  }
  getVehicleByDriverId(id:any):Observable<any>{
    return this.http.get(`${this.URL}vehicle/get_driver_vehicles/${id}`).pipe(catchError(this.errorHandler))
  }

  addVehicle(data:any):Observable<any>{
    return this.http.post(`${this.URL}vehicle/create`,data).pipe(
      tap(() =>{
        this._refreshNeeded.next();
      }),catchError(this.errorHandler))
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
