import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const FUNLE_LOGO_BACKGROUND = require('!!raw-loader!../../../assets/funle-logo-background.svg').default as string;

@Component({
  selector: 'funle-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() loggedIn: boolean;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIconLiteral(
      'funle-logo-background',
      domSanitizer.bypassSecurityTrustHtml(FUNLE_LOGO_BACKGROUND)
    );
  }
}
