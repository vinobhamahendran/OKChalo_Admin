import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AdminService } from '@app/content/service/admin.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.scss']
})
export class AdminCreateComponent implements OnInit {
  breadcrumb = [{ label: 'Home', route: '/dashboard' }, { label: 'Admin-Create-new', active: true }];
  constructor(private service: AdminService) { }
  createAdminForm: FormGroup;

  ngOnInit(): void {
    this.createAdminForm = new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
      mobile_number: new FormControl(),
      role_id: new FormControl(1),
      active: new FormControl(0)

    })
  }

  onSubmit() {
    console.log(this.createAdminForm.value);
    this.service.createAdmin(this.createAdminForm.value).subscribe(res => {
      console.log(res);
      this.createAdminForm.reset();
    })

  }


}
