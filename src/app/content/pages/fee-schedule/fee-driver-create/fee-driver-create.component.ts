import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fee-driver-create',
  templateUrl: './fee-driver-create.component.html',
  styleUrls: ['./fee-driver-create.component.scss']
})
export class FeeDriverCreateComponent implements OnInit {
  breadcrumb = [{label: 'Home',route: '/dashboard'},{label: 'Fee Schedule - Driver',route:'/fee/driver/list'},{label:'Create',active:true}];
  feedriverform : FormGroup;
  constructor(private formbuilder : FormBuilder) {
    this.feedriverform = formbuilder.group({
      signupfee:[],
      signupcredit:[],
      ridefee:[],
      ridecommission:[]
    })
   }

  ngOnInit(): void {
  }
  onsubmit(){
    console.log(this.feedriverform.value);
    this.feedriverform.reset();
  }

}
