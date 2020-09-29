import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MastersService } from '@app/content/service/masters.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-make-create',
  templateUrl: './make-create.component.html',
  styleUrls: ['./make-create.component.scss']
})
export class MakeCreateComponent implements OnInit {
  makeform : FormGroup;
  submitted = false;
  constructor(private service : MastersService,public formBuilder:FormBuilder,public modal:NgbActiveModal) { }

  ngOnInit(): void {
    this.makeform =this.formBuilder.group({
      brand_name :['',Validators.required]
    })
  }
  get f(){
    return this.makeform.controls;
  }
  opensuccessalert()
  {
    Swal.fire('Success', 'Brand Added Successfully!', 'success');
  }

  onSubmit(){
    this.submitted = true;
    if(this.makeform.invalid){
      return;
    }
    console.log(this.makeform.value);
    this.service.createMake(this.makeform.value).subscribe( res => {
      console.log(res);
      this.modal.close();
      this.opensuccessalert();
    },
    (error)=>{
      console.log(error);
    })

  }

}
