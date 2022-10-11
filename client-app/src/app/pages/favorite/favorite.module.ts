import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

import { ComponentsModule } from '../../components/components.module';
import { FavoriteComponent } from './favorite.component';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { MatTableModule } from '@angular/material/table';
import { FavoriteDetailComponent } from './views/favorite-detail/favorite-detail.component';
import { FavoriteStatusComponent } from './views/favorite-status/favorite-status.component';
import { MatButtonModule } from '@angular/material/button';
import { AssignmentsResolver } from 'src/app/services/assignments/assignment.resolver';


@NgModule({
  declarations: [FavoriteComponent, FavoriteDetailComponent, FavoriteStatusComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    TranslateModule.forChild({ extend: true }),
    FavoriteRoutingModule,
  ],
  // providers: [AssignmentsResolver]
})
export class FavoriteModule { }
