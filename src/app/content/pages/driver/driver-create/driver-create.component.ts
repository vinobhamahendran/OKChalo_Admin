import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DriversService } from '@app/content/service/drivers.service';
import { MastersService } from '@app/content/service/masters.service';
import { NotificationService } from '@app/content/service/notification.service';


@Component({
  selector: 'app-driver-create',
  templateUrl: './driver-create.component.html',
  styleUrls: ['./driver-create.component.scss']
})
export class DriverCreateComponent implements OnInit {
  breadcrumb = [{ label: 'Home', route: '/dashboard' }, { label: 'Driver - Add Driver', active: true }];
  driverform: FormGroup;
  vehicleform: FormGroup;
  languagelist: any;
  bloodGrouplist: any;
  vehicletype: any;
  submitted = false;

  constructor(private service: DriversService, public formBuilder: FormBuilder,
    private languageservice: MastersService, private router: Router,private notify:NotificationService) {
    this.vehicleform = this.formBuilder.group({
      vehicles: this.formBuilder.array([]),
    });
    this.driverform = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: [''],
      mobile_number: ['', Validators.required],
      gender: ['', Validators.required],
      blood_group_id: ['', Validators.required],
      country_id: [],
      city: ['', Validators.required],
      language_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getlanguagelist();
    this.getBloodGrouplist();
    this.getvehicletype();
  }
  vehicles(): FormArray {
    return this.vehicleform.get("vehicles") as FormArray
  }
  newVehicleinfo(): FormGroup {
    return this.formBuilder.group({
      vehicle_registration_number: ['',Validators.required],
      vehicle_type_id: ['',Validators.required],
      capacity: ['',Validators.required],
      active: false,
      driver_id: []
    })
  }

  addVehicle() {
    this.vehicles().push(this.newVehicleinfo());
  }
  removeVehicle(vehicleIndex: any) {
    this.vehicles().removeAt(vehicleIndex)
  }
  get f() { return this.driverform.controls; }
  get vehicle() { return this.vehicleform.get("vehicles") as FormArray }
  addDriver() {
    this.submitted = true;
    if (this.driverform.invalid || this.vehicle.invalid) {
      return;
    }
    console.log(this.vehicleform.value);
    this.service.addDriver(this.driverform.value).subscribe(resp => {
      this.vehicle.value.forEach(element => {
        element.driver_id = resp.id;
        this.service.addVehicle(element).subscribe(res => {
        });
      });
    });
    this.submitted = false;
    this.notify.showSuccess('Driver Added successfully');
    this.driverform.reset();
    this.vehicleform.reset();
    
  }

  getlanguagelist() {
    this.languageservice.getLanguageList().subscribe(res => {
      this.languagelist = res;
    })
  }
  getBloodGrouplist() {
    this.languageservice.getBloodGroupList().subscribe(res => {
      this.bloodGrouplist = res;
    })
  }
  getvehicletype() {
    this.languageservice.getVehicleType().subscribe(res => {
      this.vehicletype = res;
    })
  }

}
