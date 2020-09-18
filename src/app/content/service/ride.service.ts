import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RideService {
  URL = environment.httpUrl;
  ride_id : number;
  constructor(private http : HttpClient) { }

  getAllRides():Observable<any>{
    return this.http.get(`${this.URL}ride/all_rides`);
  }

  getRideDetails(ride_id):Observable<any>{
    return this.http.get(`${this.URL}ride/get/${ride_id}`)
  }
}
