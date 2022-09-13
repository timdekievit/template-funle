import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttentionComponent } from './attention.component';
import { AttentionDetailComponent } from './views/attention-detail/attention-detail.component';


const routes: Routes = [
  {
    path: '',
    component: AttentionComponent,
  },
  {
    path: ':id',
    component: AttentionDetailComponent,
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
export class AttentionRoutingModule {}