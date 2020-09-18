import { Component, OnInit } from '@angular/core';
import { FeeDriverDb } from '@app/data-db/db/feeDriverDb';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-fee-driver',
  templateUrl: './fee-driver.component.html',
  styleUrls: ['./fee-driver.component.scss']
})
export class FeeDriverComponent implements OnInit {
  breadcrumb = [{label: 'Home',route: '/dashboard'},{label: 'Fee Schedule - Driver',active:true}];
  feeDriver:any;
  dtOptions : DataTables.Settings ={};
  dtTrigger : Subject<any> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.dtOptions={
      pagingType:'simple_numbers',
      pageLength:5,
      lengthMenu:[5,15,25],
      processing:true,
      dom:'<"wrapper"flitp>',
      ordering:false
    };
    this.feeDriver = FeeDriverDb.feeDriver;
  }


}
