import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MastersService } from '@app/content/service/masters.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BloodgroupCreateComponent } from './bloodgroup-create/bloodgroup-create.component';

@Component({
  selector: 'app-bloodgroup-list',
  templateUrl: './bloodgroup-list.component.html',
  styleUrls: ['./bloodgroup-list.component.scss']
})
export class BloodgroupListComponent implements OnInit {
  breadcrumb = [{label:'Home',route:'/dashboard'},{label:'Blood Group',active:true}];
  bloodGroupData:any;
  constructor(private service : MastersService,private router :Router,private modelService:NgbModal) { }

  ngOnInit(): void {
    this.bloodGroupList();
  }

  bloodGroupList(){
    this.service.getBloodGroupList().subscribe(res =>{
      console.log(res);
      this.bloodGroupData = res;
    })
  }
  addbloodGroupModal(){
    this.modelService.open(BloodgroupCreateComponent,{centered:true});
    }

}
