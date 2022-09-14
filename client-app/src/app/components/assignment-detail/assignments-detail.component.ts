import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseAssignment, BasePortalAssignment, IBasePortalAssignment } from '@funle/entities';
// import { ProposalDeclinedDialogComponent } from '../proposal-declined-dialog/proposal-declined-dialog.component';

@Component({
  selector: 'funle-portal-assignments-detail',
  templateUrl: './assignments-detail.component.html',
  styleUrls: ['./assignments-detail.component.scss']
})
export class AssignmentsDetailComponent implements OnInit {
  @Input() assignment: BasePortalAssignment;
  @Input() accepted: boolean;

  @Output() declinedProposal = new EventEmitter<boolean>();
  @Output() acceptedProposal = new EventEmitter<boolean>();


  get isCreated(): boolean {
    return this.assignment?.proposalStatus === 'Created' || this.assignment?.proposalStatus === 'Accepted';
  }

  declined: boolean;
  

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    
  }

  declineProposal(): void {
    this.declinedProposal.next(true);
    this.declined = true;
  }

  acceptProposal(): void {
    this.acceptedProposal.next(true);
    // this.accepted = true;
  }

}