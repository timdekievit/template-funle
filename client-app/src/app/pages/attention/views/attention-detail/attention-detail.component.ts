import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Assignment } from 'src/app/models/assignment';
import { AssignmentEntityService } from 'src/app/services/assignments/assignment-enitity.service';

@Component({
  selector: 'funle-portal-attention-detail',
  templateUrl: './attention-detail.component.html',
  styleUrls: ['./attention-detail.component.scss']
})
export class AttentionDetailComponent implements OnInit {

  messageTitle = 'Deze opdracht is helaas niet meer beschikbaar';
  nothingFoundMessage = 'Maak je profiel volledig zodat wij voor jou op zoek kunnen of kijk in het overzicht of er nog een andere interessante opdracht tussen staat.';
  nothingFoundButtonText = 'Terug naar overzicht';
  assignment$: Observable<Assignment>;
  assignment: Assignment;
  accepted: boolean;
  id: string;

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

  declineProposal(): void {
    // this.assignmentService.decline(this.assignment.id).subscribe(res => {
    //   this.openDeclinedDialog();
    // });
  }

  acceptProposal(): void {
    
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
