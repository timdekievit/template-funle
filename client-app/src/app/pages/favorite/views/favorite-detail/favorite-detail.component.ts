import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PortalAssignmentService } from '@funle/api';
import { AssignmentPortal, BasePortalAssignment, IBasePortalAssignment, ProposalStatus } from '@funle/entities';
// import { ProposalAcceptedDialogComponent } from 'apps/portal/src/app/components/proposal-accepted-dialog/proposal-accepted-dialog.component';
import { Observable, Subject } from 'rxjs';
import { filter, finalize, map, mergeMap, take, takeUntil, tap } from 'rxjs/operators';
import { Assignment } from 'src/app/models/assignment';
import { AssignmentEntityService } from 'src/app/services/assignments/assignment-enitity.service';

@Component({
  selector: 'funle-portal-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.scss'],
})
export class FavoriteDetailComponent implements OnInit {
  params$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    mergeMap(() => this.route.params),
    filter(params => Boolean(params.id))
  );

  assignment$: Observable<Assignment>;
  assignment: Assignment;
  accepted: boolean;
  loading: boolean;
  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private assignmentService: AssignmentEntityService, 
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAssignment();
  }

  private getAssignment(): any {

    this.id = this.route.snapshot.paramMap.get("id");

    this.assignment$ = this.assignmentService.entities$.pipe(
      map(assignments => assignments.find(assignment => assignment.id == this.id)),
      tap(assignment => {
        if (assignment == undefined) {
          console.log("getById word uitgevoerd");
          this.assignmentService.getByKey(this.id).subscribe(assignment => assignment);
        }
      })
    )

  }

  private getAssignmentIfAssignmentIsNull() {
    if(this.assignment == null || this.assignment == undefined) {

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

