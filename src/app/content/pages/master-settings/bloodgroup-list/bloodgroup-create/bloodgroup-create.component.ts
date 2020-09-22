import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  constructor(public modal : NgbActiveModal,private service:MastersService) { }

  ngOnInit(): void {
    this.createBloodgroupform = new FormGroup({
      blood_group : new FormControl()
    });
  }
  opensuccessalert()
  {
    Swal.fire('Success', 'Blood Group Added Successfully!', 'success');
  }

  onSubmit(){
    console.log(this.createBloodgroupform.value);
    this.service.createBloodGroup(this.createBloodgroupform.value).subscribe(res =>{
      console.log(res);
      this.modal.close();
      this.opensuccessalert();
    })
  }

}
