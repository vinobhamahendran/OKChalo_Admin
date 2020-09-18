import { Component, OnInit } from '@angular/core';
import { FeePassengerDb } from '@app/data-db/db/fsPassengerDb';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-fee-passenger',
  templateUrl: './fee-passenger.component.html',
  styleUrls: ['./fee-passenger.component.scss']
})
export class FeePassengerComponent implements OnInit {
  breadcrumb = [{label: 'Home',route: '/dashboard'},{label: 'Fee Schedule - Passenger',active:true}];
  feePassenger:any;
  dtOptions : DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject();

  constructor() { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType:'simple_numbers',
      pageLength:5,
      lengthMenu:[5,15,25],
      processing:true,
      dom:'<"wrapper"flitp>',
      ordering:false
    }
    this.feePassenger = FeePassengerDb.feePassenger;
  }

}
