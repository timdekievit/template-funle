import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IBasePortalAssignment } from '@funle/entities';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Assignment } from 'src/app/models/assignment';
import { AssignmentEntityService } from 'src/app/services/assignments/assignment-enitity.service';

@Component({
  selector: 'funle-portal-all-detail',
  templateUrl: './all-detail.component.html',
  styleUrls: ['./all-detail.component.scss']
})
export class AllDetailComponent implements OnInit {

  messageTitle = 'Deze opdracht is helaas niet meer beschikbaar';
  nothingFoundMessage = 'Maak je profiel volledig zodat wij voor jou op zoek kunnen of kijk in het overzicht of er nog een andere interessante opdracht tussen staat.';
  nothingFoundButtonText = 'Terug naar overzicht';
  assignment$: Observable<Assignment>;
  id: number;

  assignment: Assignment;

  accepted: boolean;

  nothingFound = false;


  constructor(
    public dialog: MatDialog, 
    private assignmentService: AssignmentEntityService, 
    private route: ActivatedRoute
  ) { }

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
