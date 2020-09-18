import { Component, OnInit } from '@angular/core';
import { DriverModel } from '@app/data-db/model/driverModel';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-driver-view',
  templateUrl: './driver-view.component.html',
  styleUrls: ['./driver-view.component.scss']
})
export class DriverViewComponent implements OnInit {
datas:DriverModel;
  constructor(public modal : NgbActiveModal) { }

  ngOnInit(): void {
  }

}
