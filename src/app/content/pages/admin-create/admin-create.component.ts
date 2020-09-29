import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '@app/content/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.scss']
})
export class AdminCreateComponent implements OnInit {
  breadcrumb = [{ label: 'Home', route: '/dashboard' }, { label: 'Admin-Create-new', active: true }];
  constructor(private service: AdminService, private formBuilder: FormBuilder,private route:Router) { }
  createAdminForm: FormGroup;
  submitted = false;
  fieldTextType: boolean;
  repeatFieldTextType: boolean;

  ngOnInit(): void {
    this.createAdminForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: [''],
      email: ['',[Validators.required,Validators.email]],
      mobile_number: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      role_id: [1],
      active: [0],
      username: ['', Validators.required],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },
      {
        validators: this.MustMatch('password', 'confirmPassword')
      })
      
  }
  get f() { return this.createAdminForm.controls; }
  onSubmit() {
    this.submitted = true;

    if (this.createAdminForm.invalid ) {
      return;
    }

   
    // this.service.createAdmin(this.createAdminForm.value).subscribe(res => {
    //   console.log(res);    
    // });
    this.opensuccessalert();
    this.createAdminForm.reset();
    this.submitted = false;
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }
  opensuccessalert()
  {
    Swal.fire('Success', 'Admin Added Successfully!', 'success');
  }

}
