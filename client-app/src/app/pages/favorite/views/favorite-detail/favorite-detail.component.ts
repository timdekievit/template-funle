import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PortalAssignmentService } from '@funle/api';
import { AssignmentPortal, BasePortalAssignment, IBasePortalAssignment, ProposalStatus } from '@funle/entities';
import { Select, Store } from '@ngxs/store';
// import { ProposalAcceptedDialogComponent } from 'apps/portal/src/app/components/proposal-accepted-dialog/proposal-accepted-dialog.component';
import { Observable, Subject } from 'rxjs';
import { filter, map, mergeMap, take, takeUntil, tap } from 'rxjs/operators';
import { loadAssignmentAction } from 'src/app/services/assignments/assignment.actions';
import { AssignmentState } from 'src/app/services/assignments/assignment.state';

@Component({
  selector: 'funle-portal-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.scss'],
})
export class FavoriteDetailComponent implements OnInit {

  id: string;
  assignment$: Observable<AssignmentPortal>;
  @Select(AssignmentState.getAssignments) assignments$: Observable<AssignmentPortal[]>;
  assignment: AssignmentPortal;
  accepted: boolean;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private assignmentState: AssignmentState,
    private store: Store,
    public dialog: MatDialog
  ) {}

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
    //     this.assignment = { ...this.assignment, ...model};
    //     // this.assignmentService.accept(model
    //     //   ).subscribe(res => {
    //     //     this.accepted = true;
    //     //   });        
    //   }
    // });
  }
}

