import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  URL = environment.httpUrl;

  constructor(private http:HttpClient) { }

  getVehicleList():Observable<any>{
    return this.http.get(`${this.URL}vehicle/list`);
  }

  getVehicleById(vehicle_id:any){
    this.http.get(`${this.URL}get_by_vehicle_id/${vehicle_id}`,{ observe: 'response' }).
    subscribe(response =>{
    console.log(response);
    })
  }

}

