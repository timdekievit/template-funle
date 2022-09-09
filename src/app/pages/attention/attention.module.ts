import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { ComponentsModule } from '../../components/components.module';
import { AttentionComponent } from './attention.component';
import { AttentionRoutingModule } from './attention-routing.module';
import { MatTableModule } from '@angular/material/table';
import { AttentionDetailComponent } from './views/attention-detail/attention-detail.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [AttentionComponent, AttentionDetailComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    TranslateModule.forChild({ extend: true }),
    AttentionRoutingModule,
  ]
})
export class AttentionModule { }
