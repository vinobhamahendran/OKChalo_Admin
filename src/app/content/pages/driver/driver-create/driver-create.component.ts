import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DriversService } from '@app/content/service/drivers.service';
import { DriverModel } from '@app/data-db/model/driverModel';

@Component({
  selector: 'app-driver-create',
  templateUrl: './driver-create.component.html',
  styleUrls: ['./driver-create.component.scss']
})
export class DriverCreateComponent implements OnInit {
  breadcrumb = [{label:'Home',route:'/dashboard'},{label:'Driver - Add Driver',active:true}];
  driver : DriverModel=new DriverModel();
  constructor(private service:DriversService) { }

  ngOnInit(): void {
  }
  addDriver(data : NgForm){
    console.log(data.value);
    this.service.addDriver(data.value).subscribe(resp => {
      console.log(resp);
      data.resetForm();
    })

  }

}
