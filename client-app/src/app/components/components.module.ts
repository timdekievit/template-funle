import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AssignmentsDetailComponent } from './assignment-detail/assignments-detail.component';
import { AssignmentGeneralItemComponent } from './assignment-general-item/assignment-general-item.component';
import { AssignmentsTableComponent } from './assignments-table/assignments-table.component';
import { MessageComponent } from './message/message.component';
import { MessageContainerComponent } from './message-container/message-container.component';
import { TranslateModule } from '@ngx-translate/core';
import { AssignmentsFavoriteTableComponent } from './assignments-favorite-table/assignments-favorite-table.component';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { AssignmentDataService } from '../services/assignments/assignment-data.service';
import { AssignmentEntityService } from '../services/assignments/assignment-enitity.service';
import { AssignmentsResolver } from '../services/assignments/assignment.resolver';


const EntityMetadata: EntityMetadataMap = {
  Assignment: {
  
  }
}

@NgModule({
  declarations: [
    BlockComponent,
    DisabledMessageComponent,
    LinkButtonComponent,
    ActionButtonComponent,
    PortalHeaderComponent,
    BannerComponent,
    AssignmentsDetailComponent,
    AssignmentGeneralItemComponent,
    AssignmentsTableComponent,
    MessageComponent,
    MessageContainerComponent,
    AssignmentsFavoriteTableComponent
    
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
    RouterModule,
    ReactiveFormsModule,
    TranslateModule.forChild({ extend: true })
  ],
  exports: [
    BlockComponent,
    DisabledMessageComponent,
    LinkButtonComponent,
    ActionButtonComponent,
    PortalHeaderComponent,
    BannerComponent,
    AssignmentGeneralItemComponent,
    AssignmentsDetailComponent,
    AssignmentsTableComponent,
    MessageComponent,
    MessageContainerComponent,
    AssignmentsFavoriteTableComponent

  ],
  providers: [AssignmentEntityService, AssignmentsResolver, AssignmentDataService]
})
export class ComponentsModule {
  constructor(private eds: EntityDefinitionService, private entityDataService: EntityDataService,
    assignmentsDataService: AssignmentDataService) {
   eds.registerMetadataMap(EntityMetadata);

   entityDataService.registerService('Assignment', assignmentsDataService)

 }
}
