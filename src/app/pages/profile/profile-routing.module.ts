import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileBusinessComponent } from './views/business/business.component';
// import { ProfileIncentiveComponent } from './views/incentive/incentive.component';
import { ProfileMissingPhonenumberComponent } from './views/missing-phonenumber/missing-phonenumber.component';
import { ProfilePersonComponent } from './views/person/person.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
//   {
//     path: 'incentive',
//     component: ProfileIncentiveComponent
//   },
  {
    path: 'person',
    component: ProfilePersonComponent
  },
  {
    path: 'business',
    component: ProfileBusinessComponent
  },
  {
    path: 'missing/phonenumber',
    component: ProfileMissingPhonenumberComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
