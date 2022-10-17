import { Component, Input } from '@angular/core';

@Component({
  selector: 'funle-portal-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent {
  @Input() icon: string;
  @Input() title: string;
  @Input() text: string;
  @Input() type: 'basic' | 'primary' | 'secondary' = 'basic';
  @Input() height: 'full' | 'auto' = 'full';
}
