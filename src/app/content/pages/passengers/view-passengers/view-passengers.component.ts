import { Component, HostBinding, OnInit } from '@angular/core';
import { PassengerModel } from '@app/data-db/model/passengersModel';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-passengers',
  templateUrl: './view-passengers.component.html',
  styleUrls: ['./view-passengers.component.scss']
})
export class ViewPassengersComponent implements OnInit {
  @HostBinding('class') classNames = 'dt-card-performance';
  currentUser: any = {
    name: 'Super Admin',
    thumb: 'https://via.placeholder.com/150x150',
    position: 'Administrator'
  };
  datas:any;
  constructor(public modal:NgbActiveModal) { }

  ngOnInit(): void {
  }

}
