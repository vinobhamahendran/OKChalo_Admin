import { Component, OnDestroy, OnInit } from '@angular/core';
import { DriversService } from '@app/content/service/drivers.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ViewDriverComponent } from '../view-driver/view-driver.component';
import { MastersService } from '@app/content/service/masters.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit, OnDestroy {
  breadcrumb = [{ label: 'Home', route: '/dashboard' }, { label: 'Driver - All Driver', active: true }];
  drivers: any;
  address: any;
  languagelist: any = [];
  formattedlang = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  bloodgrouplist: any = [];
  finaldata: any;
  loading = true;
  constructor(private service: DriversService, private masterservice: MastersService, private router: Router, private modelService: NgbModal) { }

  getAllDrivers() {
    this.service.getAllDriver().subscribe(res => {
      this.getlanguageList();
      this.getBloodgroup();
      const mergeById = (a1, a2, a3) =>
        a1.map(driver => ({
          language: { ...a2.find((item) => (item.language_id === driver.language_id) && item) },
          bloodgroup: { ...a3.find((item1) => (item1.blood_group_id === driver.blood_group_id) && item1) },
          ...driver
        }));
      this.drivers = mergeById(res, this.languagelist, this.bloodgrouplist);
      this.dtTrigger.next();
    }
    )
  }
  viewItem(datas: any) {
    const ref = this.modelService.open(ViewDriverComponent, { size: 'lg', centered: true, backdrop: true });
    ref.componentInstance.datas = datas;
  }
  getlanguageList() {  
    this.masterservice.getLanguageList().subscribe(res => {
      this.languagelist = res;
    })
  }

  getBloodgroup() {
    this.masterservice.getBloodGroupList().subscribe(res => {
      this.bloodgrouplist = res;
    })
  }
  ngOnInit(): void {
    this.getlanguageList();
    this.getBloodgroup();
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 5,
      lengthMenu: [5, 15, 25],
      processing: true,
      dom: '<"wrapper"fltip>',
      ordering: true,
      order: [0, 'desc'] //asc,desc
    };
    this.getAllDrivers();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
