import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { DisabledMessageComponent } from './disabled-message/disabled-message.component';
import { LinkButtonComponent } from './link-button/link-button.component';


@NgModule({
  declarations: [
    BlockComponent,
    DisabledMessageComponent,
    LinkButtonComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
    FormsModule,
    RouterModule


  ],
  exports: [
    BlockComponent,
    DisabledMessageComponent,
    LinkButtonComponent
  ],
})
export class ComponentsModule {}
