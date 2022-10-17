import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PortalAssignmentService } from '@funle/api';
import { AssignmentPortal } from '@funle/entities';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AssignmentStore } from 'src/app/services/assignments/assignmentStore';

@Component({
  selector: 'funle-portal-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.scss'],
})
export class FavoriteDetailComponent implements OnInit {

  id: string;
  assignment$: Observable<AssignmentPortal>;
  assignment: AssignmentPortal;
  accepted: boolean;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private assignmentStore: AssignmentStore,
    private assignmentService: PortalAssignmentService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAssignment();
  }

  private getAssignment(): any {

    this.id = this.route.snapshot.paramMap.get("id");

    if(this.assignmentStore.isLoaded()) {
      this.assignment$ = this.assignmentStore.assignments$
        .pipe(map(assignments => assignments.find(assignment => assignment.id == this.id)));
    } 
    else {
      this.assignment$ = this.assignmentService.get(this.id);
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

