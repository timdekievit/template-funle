import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'funle-portal-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent {
  @Input() text: string = 'Bekijk';
  @Input() page: string;

  constructor(private router: Router) {}

  public clicked(): void {
    this.router.navigate([this.page]);
  }
}
