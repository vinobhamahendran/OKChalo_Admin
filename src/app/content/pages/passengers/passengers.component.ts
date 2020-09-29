import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MastersService } from '@app/content/service/masters.service';
import { PassengersService } from '@app/content/service/passengers.service';
import { PassengerModel } from '@app/data-db/model/passengersModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ViewPassengersComponent } from './view-passengers/view-passengers.component';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit, OnDestroy {
  breadcrumb = [{ label: 'Home', route: '/dashboard' }, { label: 'Passenger', active: true }];
  passengers: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  _languagelist: any;
  _bloodgrouplist: any;
  constructor(private router: Router, private service: PassengersService, private masterservice: MastersService,
    private modalService: NgbModal) { }
  ngOnInit(): void {
    this.languageList(); this.bloodgrouplist();
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 5,
      lengthMenu: [5, 15, 25],
      processing: true,
      dom: '<"wrapper"fltip>',
      ordering: true,
      order: [0, 'desc'] //asc,desc
    }
    this.getAllPassengers();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getAllPassengers() {
    this.service.getAll().subscribe(res => {
      this.languageList(); this.bloodgrouplist();
      // let mergeddata = res.map((item) => Object.assign({},item,this._languagelist[item.language_id],this._bloodgrouplist[item.blood_group_id]));
      const mergeById = (a1, a2, a3) =>
        a1.map(customer => ({
          language: { ...a2.find((item) => (item.language_id === customer.language_id) && item) },
          bloodgroup: { ...a3.find((item1) => (item1.blood_group_id == customer.blood_group_id) && item1) },
          ...customer
        }));
      this.passengers = mergeById(res, this._languagelist, this._bloodgrouplist);
      console.log(this.passengers);
      this.dtTrigger.next();
    },
    (error)=>{
      console.log(error.error);
    })
  }
  languageList() {
    this.masterservice.getLanguageList().subscribe(res => {
      this._languagelist = res;
    },
    (error)=>{
      console.log(error.error);
    })
  }
  bloodgrouplist() {
    this.masterservice.getBloodGroupList().subscribe(res => {
      this._bloodgrouplist = res;
    },
    (error)=>{
      console.log(error);
    })
  }
  viewItem(datas: any) {
    console.log(datas);
    const ref = this.modalService.open(ViewPassengersComponent, { size: 'lg', centered: true, backdrop: true });
    ref.componentInstance.datas = datas;
  }

}
