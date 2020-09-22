import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  constructor(private service : MastersService,private modal:NgbActiveModal) { }

  ngOnInit(): void {
    this.makeform = new FormGroup({
      brand_name : new FormControl()
    })
  }
  opensuccessalert()
  {
    Swal.fire('Success', 'Brand Added Successfully!', 'success');
  }

  onSubmit(){
    console.log(this.makeform.value);
    this.service.createMake(this.makeform.value).subscribe( res => {
      console.log(res);
      this.modal.close();
      this.opensuccessalert();
    })

  }

}
