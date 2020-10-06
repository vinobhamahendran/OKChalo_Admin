import { Component, OnInit } from '@angular/core';
import { AdminService } from '@app/content/service/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.getAdmin();
  }
  getAdmin(){
    let id=localStorage.getItem('currentUser');
    this.service.getAdminById(id).subscribe(res =>{
      this.user = res;
    })
  }

}
