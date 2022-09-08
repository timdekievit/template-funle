import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

import { ComponentsModule } from '../../components/components.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule.forChild({ extend: true }),
    DashboardRoutingModule,
  ],
  exports: [DashboardComponent]

})
export class DashboardModule { }
