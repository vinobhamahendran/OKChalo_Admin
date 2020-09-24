import { Component, HostBinding, OnInit } from '@angular/core';
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
  constructor(public modal:NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.datas)
  }

}
