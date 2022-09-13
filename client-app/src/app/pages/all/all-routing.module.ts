import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComponent } from './all.component';
import { AllDetailComponent } from './views/all-detail/all-detail.component';


const routes: Routes = [
  {
    path: '',
    component: AllComponent,
  },
  {
    path: ':id',
    component: AllDetailComponent,
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
export class AllRoutingModule {}
