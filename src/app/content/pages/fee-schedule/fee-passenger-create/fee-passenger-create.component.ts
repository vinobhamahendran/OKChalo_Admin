import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fee-passenger-create',
  templateUrl: './fee-passenger-create.component.html',
  styleUrls: ['./fee-passenger-create.component.scss']
})
export class FeePassengerCreateComponent implements OnInit {
  breadcrumb = [{label: 'Home',route: '/dashboard'},{label: 'Fee Schedule - Passenger',route:'/fee/passenger/list'},
  {label:'Create',active:true}];
  

  constructor(private router :Router) { }
  ngOnInit(): void {
  }

}
