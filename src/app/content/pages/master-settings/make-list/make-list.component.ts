import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MastersService } from '@app/content/service/masters.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MakeCreateComponent } from './make-create/make-create.component';

@Component({
  selector: 'app-make-list',
  templateUrl: './make-list.component.html',
  styleUrls: ['./make-list.component.scss']
})
export class MakeListComponent implements OnInit {
  breadcrumb = [{label:'Home',route:'/dashboard'},{label:'Make List',active:true}];
  makeListdata:any;
  constructor(private service : MastersService,private router :Router,private modelService:NgbModal) { }

  ngOnInit(): void {
    this.service.refreshNeeded.subscribe(()=>{
      this.makeList();
    })
    this.makeList();
  }

  makeList(){
    this.service.getMakeList().subscribe(res => {
      console.log(res);
      this.makeListdata = res;
    })
  }

  addMakeModal(){
    this.modelService.open(MakeCreateComponent,{centered:true});
  }

}
