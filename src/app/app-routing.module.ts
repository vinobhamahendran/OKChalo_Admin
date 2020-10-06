import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@app/layouts/auth-layout/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },
  {
    path:'',
    loadChildren:()=> import('./layouts/auth-layout/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./layouts/default-layout/default-layout.module').then(m => m.DefaultLayoutModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
