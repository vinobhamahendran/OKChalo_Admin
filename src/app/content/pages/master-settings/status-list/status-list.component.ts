import { Component, OnInit } from '@angular/core';
import { MastersService } from '@app/content/service/masters.service';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit {
  breadcrumb = [{label:'Home',route:'/dashboard'},{label:'Ride Status',active:true}];
  statusListdata: any;
  constructor(private service : MastersService) { }

  ngOnInit(): void {
    this.statusList();
  }

  statusList(){
    this.service.getStatusList().subscribe(res => {
      console.log(res);
      this.statusListdata = res;
    })
  }

}
