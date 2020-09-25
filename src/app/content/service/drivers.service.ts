import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DriverModel } from '@app/data-db/model/driverModel';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  URL = environment.httpUrl;

  constructor(private http : HttpClient) { }

  getAllDriver():Observable<any>{
    return this.http.get<any>(`${this.URL}drivers/list`);
  }

  addDriver(data:DriverModel):Observable<any>{
    return this.http.post(`${this.URL}drivers/create/`,data);
  }

  getDriverById(id : number):Observable<any>{
    return this.http.get<any>(`${this.URL}drivers/get/${id}`);
  }
  getDriverByMobileno(mobile_number:any):Observable<any>{
    return this.http.get(`${this.URL}drivers/profile/${mobile_number}`);
  }
  getVehicleByDriverId(id:any):Observable<any>{
    return this.http.get(`${this.URL}vehicle/get_driver_vehicles/${id}`);
  }
}
