import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'funle-portal-assignment-general-item',
  templateUrl: './assignment-general-item.component.html',
  styleUrls: ['./assignment-general-item.component.scss']
})
export class AssignmentGeneralItemComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;

  ngOnInit(): void {
    
  }
  
}
