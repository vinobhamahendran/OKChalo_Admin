import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MastersService } from '@app/content/service/masters.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lang-create',
  templateUrl: './lang-create.component.html',
  styleUrls: ['./lang-create.component.scss']
})
export class LangCreateComponent implements OnInit {
  createLanguageForm : FormGroup;
  submitted=false;
  constructor(public modal : NgbActiveModal,private service : MastersService,public formBuilder:FormBuilder) { }
  opensuccessalert()
  {
    Swal.fire('Success', 'Language Added Successfully!', 'success');
  }
  openfailurealert(){
    Swal.fire('Error', 'Failure!', 'error');
  }
  ngOnInit(): void {
    this.createLanguageForm = this.formBuilder.group({
      language: ['',Validators.required],
      active:[0]
    })
  }
  get f(){
    return this.createLanguageForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if(this.createLanguageForm.invalid){
      return;
    }
    this.service.createLanguage(this.createLanguageForm.value).subscribe(res =>{
      this.modal.close();
      this.opensuccessalert();     
    },
    (error)=>{
      console.log(error);
    })
    
  }

}
