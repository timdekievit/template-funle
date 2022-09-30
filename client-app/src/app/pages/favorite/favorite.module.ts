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
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { AssignmentDataService } from 'src/app/services/assignments/assignment-data.service';
import { AssignmentEntityService } from 'src/app/services/assignments/assignment-enitity.service';
import { AssignmentsResolver } from 'src/app/services/assignments/assignment.resolver';

const EntityMetadata: EntityMetadataMap = {
  Assignment: {
  
  }
}

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
  providers: [AssignmentEntityService, AssignmentDataService, AssignmentsResolver]
})
export class FavoriteModule { 
  constructor(private eds: EntityDefinitionService, private entityDataService: EntityDataService,
    assignmentsDataService: AssignmentDataService) {
   eds.registerMetadataMap(EntityMetadata);

   entityDataService.registerService('Assignment', assignmentsDataService)

 }
}
