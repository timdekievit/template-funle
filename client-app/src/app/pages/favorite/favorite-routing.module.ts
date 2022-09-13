import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteComponent } from './favorite.component';
import { FavoriteDetailComponent } from './views/favorite-detail/favorite-detail.component';
import { FavoriteStatusComponent } from './views/favorite-status/favorite-status.component';


const routes: Routes = [
  {
    path: '',
    component: FavoriteComponent,
  },
  {
    path: 'status/:status',
    component: FavoriteStatusComponent,
  },
  {
    path: 'status/:status/:id',
    component: FavoriteDetailComponent,
  },
  {
    path: 'status',
    redirectTo: '',
  },
  {
    path: ':id',
    component: FavoriteDetailComponent,
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
export class FavoriteRoutingModule {}
