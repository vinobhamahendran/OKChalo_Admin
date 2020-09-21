import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountSummaryDb } from '@app/data-db/db/accountSummaryDb';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.scss'],
})
export class AccountsummaryComponent implements OnInit,OnDestroy{
  breadcrumb = [{label:'Home',route:'/dashboard'},{label:'Account Summary',active:true}]
  accountList : any;
  dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject();
  
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType : 'simple_numbers',
      pageLength : 5,
      lengthMenu : [5, 15, 25],
      processing : true,
      dom : '<"wrapper"flitp>',
      ordering:true,
      order:[0,'desc'] //asc,desc
    };
    this.accountList=AccountSummaryDb.accountSummary;

  }
  ngOnDestroy(): void {
   
  }

}
