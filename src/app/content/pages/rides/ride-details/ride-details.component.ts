import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RideService } from '@app/content/service/ride.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.scss']
})
export class RideDetailsComponent implements OnInit,OnDestroy {
  breadcrumb = [{label:'Home',route:'/dashboard'},{label:'Ride Details',active:true}]
  dtOptions : DataTables.Settings = {};
  dtTrigger : Subject<any> =new Subject();
  rideDetails:any;

  constructor(private route:Router,private service : RideService) { }

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
    this.allRides();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  allRides(){
    this.service.getAllRides().subscribe(response => {
      response.forEach(element => {
        if(element.status_id === 1){
          element.status_id = 'Requested'
        }else if(element.status_id === 2){
          element.status_id = 'Confirmed'
        }       
      });
      this.rideDetails = response;
      this.dtTrigger.next();
    })
  }

  viewRides(id:any){
    console.log(id);
    this.route.navigate(['/view-ride-details',id]);
  }

}
