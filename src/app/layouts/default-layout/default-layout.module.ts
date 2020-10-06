import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {SearchBoxModule} from '@gaxon/components';
import {SharedModule} from '@gaxon/modules';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {NavigationModule} from '@gaxon/components/navigation/navigation.module';
import {PagesRoutingModule} from './pages-routing.module';

import {DefaultLayoutComponent} from './default-layout.component';
import {HeaderComponent} from './partials/header/header.component';
import {FooterComponent} from './partials/footer/footer.component';
import {NavbarVerticalComponent} from './partials/navbar/navbar-vertical/navbar-vertical.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from '@app/content/service/loader-interceptor.service';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SweetAlert2Module.forRoot(),
    RouterModule,
    PagesRoutingModule,
    NavigationModule,
    SearchBoxModule,
    PerfectScrollbarModule,
    
  ],
  declarations: [
    DefaultLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarVerticalComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }
  ]
})
export class DefaultLayoutModule {
}
