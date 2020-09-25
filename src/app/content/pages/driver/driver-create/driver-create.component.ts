import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DriversService } from '@app/content/service/drivers.service';
import { MastersService } from '@app/content/service/masters.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-driver-create',
  templateUrl: './driver-create.component.html',
  styleUrls: ['./driver-create.component.scss']
})
export class DriverCreateComponent implements OnInit {
  breadcrumb = [{label:'Home',route:'/dashboard'},{label:'Driver - Add Driver',active:true}];
  driverform : FormGroup;
  languagelist: any;
  bloodGrouplist:any;
  constructor(private service:DriversService,public formBuilder:FormBuilder,private languageservice:MastersService) { }

  ngOnInit(): void {
    this.driverform = this.formBuilder.group({
      first_name:['',Validators.required],
      last_name:[''],
      mobile_number:['',Validators.required],
      gender:[''],
      blood_group_id:[],
      country_id:[],
      city:[''],
      language_id:[]
    })
    this.getlanguagelist();
    this.getBloodGrouplist();
  }
  opensuccessalert()
  {
    Swal.fire('Success', 'Driver Added Successfully!', 'success');
  }
  addDriver(){
    console.log(this.driverform.value);
    this.service.addDriver(this.driverform.value).subscribe(resp => {
      console.log(resp);
      this.opensuccessalert();
      
    })
    this.driverform.reset();
  }

  getlanguagelist(){
    this.languageservice.getLanguageList().subscribe(res =>{
      this.languagelist = res ;
      console.log(this.languagelist);
      
    })
  }
  getBloodGrouplist(){
    this.languageservice.getBloodGroupList().subscribe(res =>{
      this.bloodGrouplist =res;
    })
  }

}
