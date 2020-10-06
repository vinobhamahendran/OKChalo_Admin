import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgProgressModule} from 'ngx-progressbar';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastNoAnimationModule, ToastrModule} from 'ngx-toastr';

import {SharedModule} from '@gaxon/modules';
import {AppRoutingModule} from '@app/app-routing.module';

import {AppService} from '@app/app.service';
import {AuthService} from '@app/layouts/auth-layout/auth.service';
import {SettingsService} from '@app/settings/settings.service';
import {NavigationService} from '@gaxon/components/navigation/navigation.service';

import {AppComponent} from './app.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule} from 'angular-datatables'
import {ConnectionServiceModule} from 'ng-connection-service';
import { LoaderInterceptorService } from './content/service/loader-interceptor.service';
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastNoAnimationModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    NgProgressModule,
    NgbModule,
    FormsModule,
    ConnectionServiceModule    ],
  providers: [
    SettingsService,
    NavigationService,
    AuthService,
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
