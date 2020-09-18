import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-driver-create',
  templateUrl: './fee-driver-create.component.html',
  styleUrls: ['./fee-driver-create.component.scss']
})
export class FeeDriverCreateComponent implements OnInit {
  breadcrumb = [{label: 'Home',route: '/dashboard'},{label: 'Fee Schedule - Driver',route:'/fee/driver/list'},{label:'Create',active:true}];

  constructor() { }

  ngOnInit(): void {
  }

}
