import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

const FUNLE_LOGO_BACKGROUND = require('!!raw-loader!../../../assets/funle-logo-background.svg').default as string;

@Component({
  selector: 'funle-portal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class PortalHeaderComponent {
  @Input() page: string;
  @Input() showBack: boolean;
  @Input() showMenu: boolean;

  @Output() back = new EventEmitter<boolean>();

  get ios(): boolean {
    return navigator.userAgent.indexOf('iPhone') >= 0;
  }


  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private router: Router) {
    this.matIconRegistry.addSvgIconLiteral(
      'funle-logo-background',
      domSanitizer.bypassSecurityTrustHtml(FUNLE_LOGO_BACKGROUND)
    );
  }

  goTo(goToPage: string): void {
    this.router.navigate([goToPage]);
  }

  onBack() {
    this.back.emit(true);
  }
}
