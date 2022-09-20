import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PortalAssignmentService } from '@funle/api';
import { Subject } from 'rxjs';
import { filter, mergeMap, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'funle-portal-favorite-status',
  templateUrl: './favorite-status.component.html',
  styleUrls: ['./favorite-status.component.scss'],
})
export class FavoriteStatusComponent implements OnDestroy {
  params$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    mergeMap(() => this.route.params),
    filter(params => Boolean(params.status))
  );

  assignments;
  loading: boolean;
  title: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private assignmentService: PortalAssignmentService
  ) {
    // this.params$
    //   .pipe(
    //     takeUntil(this.destroy$),
    //     take(1),
    //     tap(({ status }) => {
    //       this.setTitle(status);
    //       this.loading = true;
    //       this.assignmentService
    //         .getStatus(status)
    //         .pipe(takeUntil(this.destroy$))
    //         .subscribe(
    //           res => {
    //             this.assignments = res;
    //             this.loading = false;
    //           },
    //           error => {
    //             if (error.status == 401) {
    //               this.router.navigate(['account']);
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

  setTitle(status: string): void {
    switch (status) {
      case 'Submitted':
        this.title = 'Ingediend';
        break;
      case 'Interview':
        this.title = 'Intake';
        break;
      case 'Accepted':
        this.title = 'Favoriet';
        break;
      case 'Rejected':
        this.title = 'Afgewezen';
        break;
      default:
        this.title = 'Opdrachten';
    }
  }

  onAssignmentSelected(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}