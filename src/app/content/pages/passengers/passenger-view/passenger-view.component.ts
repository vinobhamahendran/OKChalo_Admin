import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PassengerModel } from '@app/data-db/model/passengersModel';

@Component({
  selector: 'app-passenger-view',
  templateUrl: './passenger-view.component.html',
  styleUrls: ['./passenger-view.component.scss']
})
export class PassengerViewComponent implements OnInit {
datas : PassengerModel;
  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
