import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentsResolver } from 'src/app/services/assignments/assignment.resolver';

import { AttentionComponent } from './attention.component';
import { AttentionDetailComponent } from './views/attention-detail/attention-detail.component';


const routes: Routes = [
  {
    path: '',
    component: AttentionComponent,
    resolve: {
      assignments: AssignmentsResolver
    }
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