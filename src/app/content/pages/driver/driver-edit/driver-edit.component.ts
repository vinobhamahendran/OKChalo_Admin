import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriversService } from '@app/content/service/drivers.service';
import { MastersService } from '@app/content/service/masters.service';
import { NotificationService } from '@app/content/service/notification.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.scss']
})
export class DriverEditComponent implements OnInit {
  vehicleform: FormGroup;
  submitted = false;
  vehicletype: any;
  datas: any;
  constructor(public formBuilder: FormBuilder, private masterService: MastersService,
    public modal: NgbActiveModal, private service: DriversService,private notify:NotificationService) {
    this.vehicleform = this.formBuilder.group({
      vehicles: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    this.getvehicletype();
  }
  vehicles(): FormArray {
    return this.vehicleform.get("vehicles") as FormArray
  }
  newVehicleinfo(): FormGroup {
    return this.formBuilder.group({
      vehicle_registration_number: ['', Validators.required],
      vehicle_type_id: ['', Validators.required],
      capacity: ['', Validators.required],
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
  get vehicle() { return this.vehicleform.get("vehicles") as FormArray }
  getvehicletype() {
    this.masterService.getVehicleType().subscribe(res => {
      this.vehicletype = res;
    })
  }
  addDriver() {
    this.submitted = true;
    if (this.vehicle.invalid) {
      return;
    }

    this.vehicle.value.forEach(element => {
      element.driver_id = this.datas.driver_id;
      this.service.addVehicle(element).subscribe(res => {
      });

    });
    this.submitted = false;
    this.notify.showSuccess('Vehicle Information Added Successfully');
    this.modal.close();
  }
}
