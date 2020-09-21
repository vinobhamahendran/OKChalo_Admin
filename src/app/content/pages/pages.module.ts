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
import { PassengerViewComponent } from './passengers/passenger-view/passenger-view.component';
import { DataTablesModule } from 'angular-datatables';
import { DriverViewComponent } from './driver/driver-view/driver-view.component';
import { ChartsModule } from 'ng2-charts';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { RideDetailsComponent } from './rides/ride-details/ride-details.component';
import { RideViewComponent } from './rides/ride-view/ride-view.component';
import { ToastrModule } from 'ngx-toastr';

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
    path:'ride-details',
    component:RideDetailsComponent
  },
  {
    path:'view-ride-details/:id',
    component:RideViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    SharedModule,
    RouterModule.forChild(appsRoutes),
    ChartsModule,
    ToastrModule.forRoot()
    
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
    PassengerViewComponent,
    DriverViewComponent,
    AdminCreateComponent,
    RideDetailsComponent,
    RideViewComponent,
    
  ]
})
export class PagesModule {
}
