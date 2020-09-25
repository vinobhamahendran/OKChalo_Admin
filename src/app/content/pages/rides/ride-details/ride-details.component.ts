import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriversService } from '@app/content/service/drivers.service';
import { MastersService } from '@app/content/service/masters.service';
import { PassengersService } from '@app/content/service/passengers.service';
import { RideService } from '@app/content/service/ride.service';
import { Subject } from 'rxjs';
declare var $ : any;
@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.scss']
})
export class RideDetailsComponent implements OnInit, OnDestroy {
  breadcrumb = [{ label: 'Home', route: '/dashboard' }, { label: 'Ride Details', active: true }]
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  rideDetails: any;
  _passengerlist: any;
  _driverlist: any;
  _statuslist:any;


  constructor(private route: Router, private service: RideService,
     private passengerservice: PassengersService,private masterservice:MastersService,
    private driverservice: DriversService) { }

  ngOnInit(): void {
    this.passengerlist();
    this.driverlist();
    this.statuslist();
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 5,
      lengthMenu: [5, 15, 25],
      processing: true,
      dom: '<"wrapper"fltip>',
      ordering: true,
      order: [0, 'desc'] //asc,desc
    }
    $('.statusfilter').on( 'change', function () {
 
      var v = $(this).val();  // getting search input value
      
      $('#dataTables-example').DataTable().columns(7).search(v).draw();
  } );
  
    this.allRides();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  passengerlist() {
    this.passengerservice.getAll().subscribe(res => {
      this._passengerlist = res;
    })
  }
  driverlist() {
    this.driverservice.getAllDriver().subscribe(res => {
      this._driverlist = res;
    })
  }
  statuslist(){
    this.masterservice.getStatusList().subscribe(res => {
      this._statuslist = res;
    })
  }

  allRides() {
    this.service.getAllRides().subscribe(response => {
      const mergeById = (a1, a2, a3,a4) =>
        a1.map(itm => ({
          customer: { ...a2.find((item) => (item.customer_id === itm.customer_id) && item) },
          driver: { ...a3.find((item1) => (item1.driver_id === itm.driver_id) && item1) },
          status:{...a4.find((item2) => (item2.status_id === itm.status_id)&& item2)},
          ...itm
        }));
      this.rideDetails = mergeById(response, this._passengerlist, this._driverlist,this._statuslist);
      console.log(this.rideDetails);
      this.dtTrigger.next();
    })
  }

  viewRides(id: any) {
    console.log(id);
    this.route.navigate(['/view-ride-details', id]);
  }

}
// let mergeddata = response.map((item)=> Object.assign({},item,this._passengerlist[item.customer_id],this._driverlist[item.driver_id]));
// let Driver = response.map((item) => Object.assign({}));

// response.forEach(element => {
//   if(element.status_id === 1){
//     element.status_id = 'Requested'
//   }else if(element.status_id === 2){
//     element.status_id = 'Confirmed'
//   }       
// })