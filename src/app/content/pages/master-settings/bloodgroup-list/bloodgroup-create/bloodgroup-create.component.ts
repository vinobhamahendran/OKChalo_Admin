import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MastersService } from '@app/content/service/masters.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bloodgroup-create',
  templateUrl: './bloodgroup-create.component.html',
  styleUrls: ['./bloodgroup-create.component.scss']
})
export class BloodgroupCreateComponent implements OnInit {

  createBloodgroupform : FormGroup;
  submitted =false;
  constructor(public modal : NgbActiveModal,public formBuilder:FormBuilder,private service:MastersService) { }

  ngOnInit(): void {
    this.createBloodgroupform = this.formBuilder.group({
      blood_group :['',Validators.required]
    });
  }
  get f(){
    return this.createBloodgroupform.controls;
  }
  opensuccessalert()
  {
    Swal.fire('Success', 'Blood Group Added Successfully!', 'success');
  }

  onSubmit(){
    this.submitted =true;
    if(this.createBloodgroupform.invalid){
      return;
    }
    console.log(this.createBloodgroupform.value);
    this.service.createBloodGroup(this.createBloodgroupform.value).subscribe(res =>{
      console.log(res);
      this.modal.close();
      this.opensuccessalert();
    },
    (error)=>{
      console.log(error);
    })
  }

}
