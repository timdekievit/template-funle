import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [CardComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [CardComponent, FooterComponent, HeaderComponent],
})
export class UiComponentsModule {}
