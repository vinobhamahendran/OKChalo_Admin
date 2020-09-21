import { Component, OnDestroy, OnInit } from '@angular/core';
import { DriversService } from '@app/content/service/drivers.service';
import { DriverModel } from '@app/data-db/model/driverModel';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DriverViewComponent } from '../driver-view/driver-view.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit,OnDestroy {
  breadcrumb = [{label:'Home',route:'/dashboard'},{label: 'Driver - All Driver',active:true}];
  drivers :any;
  address:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private service : DriversService,private router :Router,private modelService:NgbModal) { }

  getAllDrivers(){
    this.service.getAllDriver().subscribe(res => {
      console.log(res);
      this.drivers = res;
      this.dtTrigger.next();
    }    
      )
  }
  viewItem(datas : DriverModel){
    const ref = this.modelService.open(DriverViewComponent,{size:'lg',centered:true,backdrop:true});
    ref.componentInstance.datas=datas;
  }
  editDriver(id : number){
    console.log(id);
    this.router.navigate(['driver-edit', id]);
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType : 'simple_numbers',
      pageLength : 5,
      lengthMenu : [5, 15, 25],
      processing : true,
      dom : '<"wrapper"fltip>',
      ordering:true,
      order:[0,'desc'] //asc,desc
      

    };
    this.getAllDrivers();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
