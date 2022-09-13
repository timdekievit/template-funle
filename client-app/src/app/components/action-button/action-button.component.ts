import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'funle-portal-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {
  @Input() text: string = 'Bekijk';
  @Input() type: 'primary' | 'secondary' = 'primary';
}
