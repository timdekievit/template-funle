import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'funle-portal-attention-detail',
  templateUrl: './attention-detail.component.html',
  styleUrls: ['./attention-detail.component.scss']
})
export class AttentionDetailComponent implements OnInit {

  messageTitle = 'Deze opdracht is helaas niet meer beschikbaar';
  nothingFoundMessage = 'Maak je profiel volledig zodat wij voor jou op zoek kunnen of kijk in het overzicht of er nog een andere interessante opdracht tussen staat.';
  nothingFoundButtonText = 'Terug naar overzicht';

  assignment: any;
  accepted: boolean;

  nothingFound = false;

  constructor() { }

  ngOnInit(): void {
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
