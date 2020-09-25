import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '@gaxon/modules';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FeePassengerComponent } from './fee-schedule/fee-passenger/fee-passenger.component';
import { FeeDriverComponent } from './fee-schedule/fee-driver/fee-driver.component';
import { FeePassengerCreateComponent } from './fee-schedule/fee-passenger-create/fee-passenger-create.component';
import { FeeDriverCreateComponent } from './fee-schedule/fee-driver-create/fee-driver-create.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { PassengersComponent } from './passengers/passengers.component';
import { DriverCreateComponent } from './driver/driver-create/driver-create.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { DataTablesModule } from 'angular-datatables';
import { ChartsModule } from 'ng2-charts';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { RideDetailsComponent } from './rides/ride-details/ride-details.component';
import { RideViewComponent } from './rides/ride-view/ride-view.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { LangListComponent } from './master-settings/lang-list/lang-list.component';
import { BloodgroupListComponent } from './master-settings/bloodgroup-list/bloodgroup-list.component';
import { StatusListComponent } from './master-settings/status-list/status-list.component';
import { LangCreateComponent } from './master-settings/lang-list/lang-create/lang-create.component';
import { BloodgroupCreateComponent } from './master-settings/bloodgroup-list/bloodgroup-create/bloodgroup-create.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MakeListComponent } from './master-settings/make-list/make-list.component';
import { MakeCreateComponent } from './master-settings/make-list/make-create/make-create.component';
import { ViewDriverComponent } from './driver/view-driver/view-driver.component';
import { ViewPassengersComponent } from './passengers/view-passengers/view-passengers.component';
import { VehicleComponent } from './master-settings/vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleViewComponent } from './vehicle/vehicle-view/vehicle-view.component';


const appsRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'feepassenger-list',
    component: FeePassengerComponent
  },
  {
    path: 'feedriver-list',
    component: FeeDriverComponent
  },
  {
    path: 'feepassenger-create',
    component: FeePassengerCreateComponent
  },
  {
    path: 'feedriver-create',
    component: FeeDriverCreateComponent
  },
  {
    path: 'paymentgateway',
    component: PaymentgatewayComponent
  },
  {
    path: 'account-summary',
    component:AccountsummaryComponent
  },
  {
    path: 'passenger-list',
    component: PassengersComponent
  },
  {
    path:'driver-Create',
    component:DriverCreateComponent
  },
  {
    path:'driver-list',
    component:DriverListComponent
  },
  {
    path:'admin-create',
    component:AdminCreateComponent
  },
  {
    path:'admin-list',
    component:AdminListComponent
  },
  {
    path:'ride-details',
    component:RideDetailsComponent
  },
  {
    path:'view-ride-details/:id',
    component:RideViewComponent
  },
  {
    path:'lang-list',
    component:LangListComponent
  },
  {
    path:'bloodgroup-list',
    component:BloodgroupListComponent
  },
  {
    path:'ridestatus-list',
    component:StatusListComponent
  },
  {
    path:'make-list',
    component:MakeListComponent
  },
  {
    path:'vehicletype',
    component:VehicleComponent
  },
  {
    path:'vehicle-list',
    component:VehicleListComponent
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    SharedModule,
    RouterModule.forChild(appsRoutes),
    ChartsModule,
    SweetAlert2Module.forRoot(),    
  ],
  
  declarations: [
    DashboardComponent,
    FeePassengerComponent,
    FeeDriverComponent,
    FeePassengerCreateComponent,
    FeeDriverCreateComponent,
    PaymentgatewayComponent,
    AccountsummaryComponent,
    PassengersComponent,
    DriverCreateComponent,
    DriverListComponent,
    AdminCreateComponent,
    RideDetailsComponent,
    RideViewComponent,
    AdminListComponent,
    LangListComponent,
    BloodgroupListComponent,
    StatusListComponent,
    LangCreateComponent,
    BloodgroupCreateComponent,
    MakeListComponent,
    MakeCreateComponent,
    ViewDriverComponent,
    ViewPassengersComponent,
    VehicleComponent,
    VehicleListComponent,
    VehicleViewComponent
    
  ]
})
export class PagesModule {
}
