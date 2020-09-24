import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '@app/content/service/admin.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.scss']
})
export class AdminCreateComponent implements OnInit {
  breadcrumb = [{ label: 'Home', route: '/dashboard' }, { label: 'Admin-Create-new', active: true }];
  constructor(private service: AdminService,private formBuilder: FormBuilder) { }
  createAdminForm: FormGroup;
  submitted =false;
  fieldTextType: boolean;
  repeatFieldTextType: boolean;

  ngOnInit(): void {
    this.createAdminForm= this.formBuilder.group({
      first_name: ['',Validators.required],
      last_name:[''],
      email:[''],
      mobile_number:['',Validators.required],
      role_id:[1],
      active:[0],
      username:['',Validators.required],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]
    },
    {
      validators:this.MustMatch('password','confirmPassword')
    })
  }
  get f() { return this.createAdminForm.controls; }
  onSubmit() {
    this.submitted = true;
    
    if (this.createAdminForm.invalid) {
      return;
  }

  console.log(this.createAdminForm.value);
    // this.service.createAdmin(this.createAdminForm.value).subscribe(res => {
    //   console.log(res);
    //   this.createAdminForm.reset();
    // })

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

}
