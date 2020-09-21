import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DriversService } from '@app/content/service/drivers.service';
import { DriverModel } from '@app/data-db/model/driverModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-driver-create',
  templateUrl: './driver-create.component.html',
  styleUrls: ['./driver-create.component.scss']
})
export class DriverCreateComponent implements OnInit {
  breadcrumb = [{label:'Home',route:'/dashboard'},{label:'Driver - Add Driver',active:true}];
  driver : DriverModel=new DriverModel();
  constructor(private service:DriversService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  showSuccess(){
    this.toastr.info("Driver Created Successfully", 'Success',{
      timeOut:1000,
      positionClass:"toast-bottom-right",
    });
}
  addDriver(data : NgForm){
    console.log(data.value);
    this.service.addDriver(data.value).subscribe(resp => {
      console.log(resp);
      this.showSuccess();
      data.resetForm();
    })

  }

}
