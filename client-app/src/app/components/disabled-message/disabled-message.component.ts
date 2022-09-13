import { Component, Input } from '@angular/core';

@Component({
  selector: 'funle-portal-disabled-message',
  templateUrl: './disabled-message.component.html',
  styleUrls: ['./disabled-message.component.scss']
})
export class DisabledMessageComponent {
  @Input() type: 'inactive' | 'notSearching' | 'inactiveProfile' | 'incompleteProfile';
}
