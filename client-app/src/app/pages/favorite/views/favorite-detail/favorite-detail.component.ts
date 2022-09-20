import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PortalAssignmentService } from '@funle/api';
import { BasePortalAssignment, IBasePortalAssignment, ProposalStatus } from '@funle/entities';
// import { ProposalAcceptedDialogComponent } from 'apps/portal/src/app/components/proposal-accepted-dialog/proposal-accepted-dialog.component';
import { Subject } from 'rxjs';
import { filter, mergeMap, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'funle-portal-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.scss'],
})
export class FavoriteDetailComponent implements OnDestroy {
  params$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    mergeMap(() => this.route.params),
    filter(params => Boolean(params.id))
  );

  assignment: IBasePortalAssignment;
  accepted: boolean;
  loading: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private assignmentService: PortalAssignmentService,
    public dialog: MatDialog
  ) {
    // this.params$
    //   .pipe(
    //     takeUntil(this.destroy$),
    //     take(1),
    //     tap(({ id }) => {
    //       this.loading = true;
    //       this.assignmentService
    //         .get(id)
    //         .pipe(takeUntil(this.destroy$))
    //         .subscribe(
    //           res => {
    //             this.assignment = new BasePortalAssignment(res);
    //             this.accepted = this.assignment.proposalStatus === 'Accepted';
    //             this.loading = false;
    //           },
    //           error => {
    //             if (error.status == 401) {
    //               this.router.navigate(['account']);
    //             }
    //             if (error.status == 404) {
    //               this.router.navigate(['favorite']);
    //             }
    //           }
    //         );
    //     })
    //   )
    //   .subscribe();
  }

  private destroy$ = new Subject<boolean>();
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  acceptProposal(): void {
    this.openAcceptedDialog();  
  }

  openAcceptedDialog(): void {
    const dialogRef = this.dialog.open(ProposalAcceptedDialogComponent, {
      width: '100%',
      data: this.assignment,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && result.motivation !== '') {
        const model = {
          id: this.assignment.id, 
          motivation: result.motivation,
          makeMotivationDefault: result.defaultMotivation,
          notes: result.notes
        };
        this.assignment = { ...this.assignment, ...model};
        // this.assignmentService.accept(model
        //   ).subscribe(res => {
        //     this.accepted = true;
        //   });        
      }
    });
  }
}

