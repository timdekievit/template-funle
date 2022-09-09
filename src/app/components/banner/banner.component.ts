import { Component, Input } from '@angular/core';

@Component({
  selector: 'funle-portal-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() title: string;
  @Input() firstParagraph: string;
  @Input() secondParagraph: string;
}
