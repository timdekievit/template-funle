import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { FormComponentsModule } from '@funle/forms/components';

import { ComponentsModule } from '../../components/components.module';
import { MatTableModule } from '@angular/material/table';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileMissingPhonenumberComponent } from './views/missing-phonenumber/missing-phonenumber.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
// import { ProfileIncentiveComponent } from './views/incentive/incentive.component';
import { ProfilePersonComponent } from './views/person/person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProfileBusinessComponent } from './views/business/business.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from 'src/app/ngrx';
import { EffectsModule } from '@ngrx/effects';
import { EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { CandidateEntityService } from 'src/app/services/candidates/candidate-entity.service';
import { CandidatesResolver } from 'src/app/services/candidates/candidate.resolver';


const EntityMetadata: EntityMetadataMap = {
  Candidate: {
  
  }
}


@NgModule({
  declarations: [ProfileComponent, ProfileMissingPhonenumberComponent, ProfilePersonComponent, ProfileBusinessComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    FormComponentsModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTableModule,
    MatButtonModule,
    StoreModule.forFeature('candidates', reducers),
    EffectsModule.forFeature(effects),
    TranslateModule.forChild({ extend: true }),
    ProfileRoutingModule,
  ],
  providers: [CandidateEntityService, CandidatesResolver]
})
export class ProfileModule { 
  constructor(private eds: EntityDefinitionService) {
    eds.registerMetadataMap(EntityMetadata);

  }
}
