import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgProgressModule} from 'ngx-progressbar';
import {AuthComponent} from './auth.component';
import {SharedModule} from '@gaxon/modules';
import {RouterModule} from '@angular/router';

import {PagesRoutingModule} from './pages-routing.module';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgProgressModule,
    RouterModule,
    PagesRoutingModule,
  ],
  declarations: [
    SigninComponent,
    AuthComponent
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule {
}
