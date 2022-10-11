import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PortalAssignmentService } from '@funle/api';
import { AssignmentPortal } from '@funle/entities';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadAssignmentAction } from 'src/app/services/assignments/assignment.actions';
import { AssignmentState } from 'src/app/services/assignments/assignment.state';

@Component({
  selector: 'funle-portal-all-detail',
  templateUrl: './all-detail.component.html',
  styleUrls: ['./all-detail.component.scss']
})
export class AllDetailComponent implements OnInit {

  messageTitle = 'Deze opdracht is helaas niet meer beschikbaar';
  nothingFoundMessage = 'Maak je profiel volledig zodat wij voor jou op zoek kunnen of kijk in het overzicht of er nog een andere interessante opdracht tussen staat.';
  nothingFoundButtonText = 'Terug naar overzicht';

  id: string;
  assignment$: Observable<AssignmentPortal>;
  @Select(AssignmentState.getAssignments) assignments$: Observable<AssignmentPortal[]>;

  accepted: boolean;

  nothingFound = false;


  constructor(
    private route: ActivatedRoute,
    private assignmentState: AssignmentState,
    private store: Store,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  private getAssignment(): any {

    this.id = this.route.snapshot.paramMap.get("id");

    if(this.assignmentState.isLoaded()) {
      this.assignment$ = this.assignments$
        .pipe(map(assignments => assignments.find(assignment => assignment.id == this.id)));
    } 
    else {
      this.assignment$ = this.store.dispatch(new loadAssignmentAction(this.id))
        .pipe(
          map(state => state.Assignments.assignments.find(assignment => assignment.id == this.id))
        )
    }
  } 

  acceptProposal(): void {
    this.openAcceptedDialog();
  }

  declineProposal(): void {
    // this.assignmentService.decline(this.assignment.id).subscribe(res => {
    //   this.openDeclinedDialog();
    // });
  }

  openAcceptedDialog(): void {
    // const dialogRef = this.dialog.open(ProposalAcceptedDialogComponent, {
    //   width: '100%',
    //   data: this.assignment,
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result !== undefined && result.motivation !== '') {
    //     const model = {
    //       id: this.assignment.id,
    //       motivation: result.motivation,
    //       makeMotivationDefault: result.defaultMotivation,
    //       notes: result.notes
    //     };
    //     this.assignment = { ...this.assignment, ...model };
    //     this.assignmentService.accept(model).subscribe(res => {
    //       this.accepted = true;
    //     });
    //   }
    // });
  }

  openDeclinedDialog(): void {
    // const dialogRef = this.dialog.open(ProposalDeclinedDialogComponent, {
    //   width: '100%',
    //   data: null,
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result !== undefined && result.declinedReason !== '') {
    //     this.assignmentService.declinedReason({ id: this.assignment.id, declinedReason: result.declinedReason }).subscribe(res => {
    //     });
    //   }
    // });
  }

}
