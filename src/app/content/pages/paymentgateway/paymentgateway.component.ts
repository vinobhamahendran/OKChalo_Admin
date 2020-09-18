import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrls: ['./paymentgateway.component.scss']
})
export class PaymentgatewayComponent implements OnInit {
  breadcrumb = [{label:'Home',route:'/dashboard'},{label: 'Payment Gateway',active:true}];

  constructor() { }

  ngOnInit(): void {
  }

}
