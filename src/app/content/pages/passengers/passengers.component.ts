import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassengersService } from '@app/content/service/passengers.service';
import { PassengerModel } from '@app/data-db/model/passengersModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { PassengerViewComponent } from './passenger-view/passenger-view.component';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit,OnDestroy{
  breadcrumb = [{label:'Home',route:'/dashboard'},{label: 'Passenger',active:true}];
  passengers:any;
  dtOptions : DataTables.Settings={};
  dtTrigger: Subject<any> =new Subject();
  constructor(private router : Router,private service:PassengersService,private modalService:NgbModal) { }
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
    this.getAllPassengers();
  }
  ngOnDestroy(): void {
   this.dtTrigger.unsubscribe();
  }

  getAllPassengers(){
    this.service.getAll().subscribe(res => {
      this.passengers = res;
      console.log(res);
      this.dtTrigger.next();
    })
  }
  viewItem(datas : PassengerModel){
    console.log(datas);
    const ref = this.modalService.open(PassengerViewComponent,{size:'lg',centered:true,backdrop:true});
    ref.componentInstance.datas=datas;
  }

}
