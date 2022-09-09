import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { DisabledMessageComponent } from './disabled-message/disabled-message.component';
import { LinkButtonComponent } from './link-button/link-button.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { PortalHeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    BlockComponent,
    DisabledMessageComponent,
    LinkButtonComponent,
    ActionButtonComponent,
    PortalHeaderComponent,
    BannerComponent
    
  ],
  imports: [
    MatTabsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatBadgeModule,
    MatTooltipModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    BlockComponent,
    DisabledMessageComponent,
    LinkButtonComponent,
    ActionButtonComponent,
    PortalHeaderComponent,
    BannerComponent
  ],
})
export class ComponentsModule {}
