import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';

import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { PersonalInfoFormComponent } from './candidate/personal-info-form/personal-info-form.component';
import { BusinessInfoFormComponent } from './candidate/business-info-form/business-info-form.component';
import { SkillsInfoFormComponent } from './candidate/skills-info-form/skills-info-form.component';
import { TagsInfoFormComponent } from './candidate/tags-info-form/tags-info-form.component';
import { AdminInfoFormComponent } from './candidate/admin-info-form/admin-info-form.component';
import { PhoneNumberFormComponent } from './candidate/phonenumber-form/phonenumber-form.component';

@NgModule({
  declarations: [
    CandidateFormComponent, 
    PersonalInfoFormComponent, 
    BusinessInfoFormComponent, 
    SkillsInfoFormComponent, 
    TagsInfoFormComponent,
    AdminInfoFormComponent,
    PhoneNumberFormComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({ extend: true }),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    MatChipsModule,
  ],
  exports: [
    CandidateFormComponent,
    PersonalInfoFormComponent, 
    BusinessInfoFormComponent, 
    SkillsInfoFormComponent, 
    TagsInfoFormComponent,
    AdminInfoFormComponent,
    PhoneNumberFormComponent
  ],
})
export class FormComponentsModule {}
