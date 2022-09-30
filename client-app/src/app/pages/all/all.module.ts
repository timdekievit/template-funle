import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { ComponentsModule } from '../../components/components.module';
import { AllComponent } from './all.component';
import { AllRoutingModule } from './all-routing.module';
import { MatTableModule } from '@angular/material/table';
import { AllDetailComponent } from './views/all-detail/all-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { AssignmentEntityService } from 'src/app/services/assignments/assignment-enitity.service';
import { AssignmentsResolver } from 'src/app/services/assignments/assignment.resolver';
import { AssignmentDataService } from 'src/app/services/assignments/assignment-data.service';

const EntityMetadata: EntityMetadataMap = {
  Assignment: {
  
  }
}

@NgModule({
  declarations: [AllComponent, AllDetailComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    TranslateModule.forChild({ extend: true }),
    AllRoutingModule,
  ],
  providers: [AssignmentEntityService, AssignmentsResolver, AssignmentDataService]
})
export class AllModule { 
  constructor(private eds: EntityDefinitionService, private entityDataService: EntityDataService,
     assignmentsDataService: AssignmentDataService) {
    eds.registerMetadataMap(EntityMetadata);

    entityDataService.registerService('Assignment', assignmentsDataService)

  }
}
