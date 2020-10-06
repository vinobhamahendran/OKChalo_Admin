import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NotificationService } from '@app/content/service/notification.service';

@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrls: ['./paymentgateway.component.scss']
})
export class PaymentgatewayComponent implements OnInit {
  breadcrumb = [{label:'Home',route:'/dashboard'},{label: 'Payment Gateway',active:true}];
  paymentform:FormGroup;
  Options : Array<any> = [
    {name:'BHIM',value:'bhim'},
    {name:'Google Pay',value:'googlepay'},
    {name:'WhatsApp Pay',value:'whatsapppay'},
    {name:'PayU',value:'payu'},
    {name:'Paytm',value:'paytm'},

  ]
  constructor(public formbuilder : FormBuilder,private notify:NotificationService) {
    this.paymentform = formbuilder.group({
      checkArray:formbuilder.array([])
    })
    
   }

   onCheckboxChange(e){
     const checkArray : FormArray = this.paymentform.get('checkArray') as FormArray;
     if(e.target.checked){
       checkArray.push(new FormControl(e.target.value));
     } else {
       let i : number = 0;
       checkArray.controls.forEach((item : FormControl) => {
        if(item.value == e.target.value){
          checkArray.removeAt(i);
          return
        }
        i++;
       });
     }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.paymentform.value);
  }

}
