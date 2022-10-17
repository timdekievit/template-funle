import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'funle-portal-assignments-detail',
  templateUrl: './assignments-detail.component.html',
  styleUrls: ['./assignments-detail.component.scss']
})
export class AssignmentsDetailComponent {
  @Input() assignment: any;
  @Input() accepted: boolean;
  
  @Output() declinedProposal = new EventEmitter<boolean>();
  @Output() acceptedProposal = new EventEmitter<boolean>();

  get isCreated(): boolean {
    return this.assignment?.proposalStatus === 'Created' || this.assignment?.proposalStatus === 'Accepted';
  }

  declined: boolean;
  

  constructor(public dialog: MatDialog) {}

  declineProposal(): void {
    this.declinedProposal.next(true);
    this.declined = true;
  }

  acceptProposal(): void {
    this.acceptedProposal.next(true);
  }

}
