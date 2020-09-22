import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  constructor(public modal : NgbActiveModal,private service : MastersService) { }
  opensuccessalert()
  {
    Swal.fire('Success', 'Blood Group Added Successfully!', 'success');
  }
  openfailurealert(){
    Swal.fire('Error', 'Failure!', 'error');
  }
  ngOnInit(): void {
    this.createLanguageForm = new FormGroup({
      language: new FormControl(),
      active:new FormControl(0)
    })
  }
  onSubmit(){
    console.log(this.createLanguageForm.value);
    this.service.createLanguage(this.createLanguageForm.value).subscribe(res =>{
      this.modal.close();
      this.opensuccessalert();
      setTimeout(() => {
        parent.location.reload();
      }, 1000);
      
    })
    
  }

}
