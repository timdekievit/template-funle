import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PortalAssignmentService } from '@funle/api';
import { BaseAssignment, BasePortalAssignment, IBasePortalAssignment } from '@funle/entities';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Assignment } from 'src/app/models/assignment';
import { AssignmentEntityService } from 'src/app/services/assignments/assignment-enitity.service';
// import { ProposalDeclinedDialogComponent } from '../proposal-declined-dialog/proposal-declined-dialog.component';

@Component({
  selector: 'funle-portal-assignments-detail',
  templateUrl: './assignments-detail.component.html',
  styleUrls: ['./assignments-detail.component.scss']
})
export class AssignmentsDetailComponent implements OnInit {
  @Input() assignment: any;
  @Input() accepted: boolean;
  
  assignment$: Observable<Assignment>;
  id: number;

  @Output() declinedProposal = new EventEmitter<boolean>();
  @Output() acceptedProposal = new EventEmitter<boolean>();

  get isCreated(): boolean {
    return this.assignment?.proposalStatus === 'Created' || this.assignment?.proposalStatus === 'Accepted';
  }

  declined: boolean;
  

  constructor(public dialog: MatDialog, private assignmentService: AssignmentEntityService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAssignment();
  }

  private getAssignment(): any {

    this.route.params.subscribe(res => {
      this.id = res.id;
      this.assignment$ = this.assignmentService.entities$.pipe(
        map(assignments => assignments.find(assignment => assignment.id == res.id))
      )
    });

    this.assignment$.subscribe(assignment => this.assignment = assignment);

    if(this.assignment == null) {
      console.log("getById word uitgevoerd");
      this.assignmentService.getByKey(this.id).subscribe(assignment => this.assignment = assignment);
    }

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
