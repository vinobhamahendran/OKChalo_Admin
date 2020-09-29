import { Component, HostBinding, OnInit } from '@angular/core';
import { DriversService } from '@app/content/service/drivers.service';
import { DriverModel } from '@app/data-db/model/driverModel';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.component.html',
  styleUrls: ['./view-driver.component.scss']
})
export class ViewDriverComponent implements OnInit {
  @HostBinding('class') classNames = 'dt-card-performance';
  currentUser: any = {
    name: 'Super Admin',
    thumb: 'https://via.placeholder.com/150x150',
    position: 'Administrator'
  };
  datas:any;
  _vehicleinfo:any;
  constructor(public modal:NgbActiveModal,private service:DriversService) { }

  ngOnInit(): void {
    console.log(this.datas);
    this.vehicleinfo();
  }
  vehicleinfo(){
    this.service.getVehicleByDriverId(this.datas.driver_id).subscribe(res =>{
        this._vehicleinfo =res;
        console.log(res);
    },
    (error)=>{
      console.log(error.error.message);
    })
    
  }

}
