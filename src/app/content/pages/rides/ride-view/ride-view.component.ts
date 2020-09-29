import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RideService } from '@app/content/service/ride.service';

@Component({
  selector: 'app-ride-view',
  templateUrl: './ride-view.component.html',
  styleUrls: ['./ride-view.component.scss']
})
export class RideViewComponent implements OnInit {
  breadcrumb = [{label:'Home',route:'/dashboard'},{label:'Ride Details',route:'/ride-details'},{label:'View Ride-Details',active:true}]
  rideId : any;
  viewRides:any;
  constructor(private router:Router,private activatedRoute : ActivatedRoute,private service : RideService) { }


  ngOnInit(): void {
    this.rideId=this.activatedRoute.snapshot.params['id'];
    console.log(this.rideId);
    this.viewDetails();
  }
  viewDetails(){
    this.service.getRideDetails(this.rideId).subscribe(res =>
      {
        console.log(res);
        this.viewRides = res;
      },
      (error)=>{
        console.log(error.error.message);
      })
  }
}
