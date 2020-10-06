import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriversService } from '@app/content/service/drivers.service';
import { DriverModel } from '@app/data-db/model/driverModel';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DriverEditComponent } from '../driver-edit/driver-edit.component';

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
  novehicel = false;
  constructor(public modal:NgbActiveModal,private service:DriversService,private router: Router, private modelService: NgbModal) { }

  ngOnInit(): void {
    this.vehicleinfo();
  }
  vehicleinfo(){
    this.service.getVehicleByDriverId(this.datas.driver_id).subscribe(res =>{
        this._vehicleinfo =res;
    },
    (error)=>{
      this.novehicel = true;
    })
    
  }
  addVehicleInfo(datas: any) {
    const ref = this.modelService.open(DriverEditComponent, { size: 'xl', centered: true, backdrop: true });
    ref.componentInstance.datas = datas;
  }

}
