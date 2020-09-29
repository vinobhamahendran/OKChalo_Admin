import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '@app/content/service/vehicle.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { VehicleViewComponent } from '../vehicle-view/vehicle-view.component';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit,OnDestroy {

  breadcrumb = [{label:'Home',route:'/dashboard'},{label:'Vehicle List',active:true}];
  _vehiclelist : any;
  dtOptions : DataTables.Settings ={};
  dtTrigger : Subject<any> = new Subject();
  constructor(private service:VehicleService,private router :Router,private modelService:NgbModal) { }
 

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 5,
      lengthMenu: [5, 15, 25],
      processing: true,
      dom: '<"wrapper"fltip>',
      ordering: true,
      order: [0, 'desc'] //asc,desc
    }
    this.vehicleList();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  vehicleList(){
    this.service.getVehicleList().subscribe(res => {
      this._vehiclelist = res ;
      console.log(this._vehiclelist);
      this.dtTrigger.next();
    },
    (error)=>{
      console.log(error);
    })
  }

  openModal(datas:any){
    const ref = this.modelService.open(VehicleViewComponent,{size:'lg',centered:true,backdrop:true});
    ref.componentInstance._vehicleData=datas;
  }

}
