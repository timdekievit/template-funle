import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AssignmentPortal } from '@funle/entities';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AssignmentEntityService } from 'src/app/services/assignments/assignment-enitity.service';

@Component({
  selector: 'funle-portal-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.scss'],
})
export class FavoriteDetailComponent implements OnInit {

  assignment$: Observable<AssignmentPortal>;
  assignment: AssignmentPortal;
  accepted: boolean;
  loading: boolean;
  id: string;
  subscription: Subscription;
  subscriptionUsed = false;

  constructor(
    private route: ActivatedRoute,
    private assignmentService: AssignmentEntityService, 
    public dialog: MatDialog
  ) {}

  ngOnDestroy(): void {
    if (this.subscriptionUsed) this.subscription.unsubscribe()
  }

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
          this.subscription = this.assignmentService.getByKey(this.id).subscribe(assignment => assignment);
          this.subscriptionUsed = true;
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

