import { Component, OnInit } from '@angular/core';
import { VehicleService } from '@app/content/service/vehicle.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.scss']
})
export class VehicleViewComponent implements OnInit {

  _vehicleData : any;
  datas : any;
  constructor(private service : VehicleService,public modal:NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this._vehicleData);
    this.vehicleByid();
  }

  vehicleByid(){
    this.service.getVehicleById(this._vehicleData.vehicle_id);
    
  }

}
