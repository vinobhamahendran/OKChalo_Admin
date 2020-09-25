import { Component, OnInit } from '@angular/core';
import { MastersService } from '@app/content/service/masters.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  _vehiclelist: any;
  breadcrumb = [{label:'Home',route:'/dashboard'},{label:'Vehicle Type',active:true}];
  constructor(private service:MastersService) { }

  ngOnInit(): void {
    this.vehicleList();
  }


  vehicleList(){
    this.service.getVehicleType().subscribe(res => {
      this._vehiclelist = res;
    })
  }

}
