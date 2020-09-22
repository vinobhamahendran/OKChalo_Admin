import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from '@app/content/service/admin.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit,OnDestroy {
  breadcrumb = [{label:'Home',route:'/dashboard'},{label: 'Passenger',active:true}];
  adminList:any;
  dtOptions : DataTables.Settings={};
  dtTrigger: Subject<any> =new Subject();
  constructor(private service : AdminService) { }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType : 'simple_numbers',
      pageLength : 5,
      lengthMenu : [5, 15, 25],
      processing : true,
      dom : '<"wrapper"fltip>',
      ordering:true,
      order:[0,'desc'] //asc,desc
    }
    this.getAllAdmin();
  }
  getAllAdmin(){
    this.service.getAdmin().subscribe(res => {
      console.log(res);
      this.adminList = res;
      this.dtTrigger.next();
    })
  }
  viewItem(data:any){
    console.log(data);
  }

}
