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
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { AssignmentDataService } from 'src/app/services/assignments/assignment-data.service';
import { AssignmentEntityService } from 'src/app/services/assignments/assignment-enitity.service';
import { AssignmentsResolver } from 'src/app/services/assignments/assignment.resolver';

const EntityMetadata: EntityMetadataMap = {
  Assignment: {

  }
}

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
  ],
  providers: [AssignmentEntityService, AssignmentsResolver, AssignmentDataService]
})
export class AttentionModule {
  constructor(private eds: EntityDefinitionService, private entityDataService: EntityDataService,
    assignmentsDataService: AssignmentDataService) {
    eds.registerMetadataMap(EntityMetadata);

    entityDataService.registerService('Assignment', assignmentsDataService)

  }
}
