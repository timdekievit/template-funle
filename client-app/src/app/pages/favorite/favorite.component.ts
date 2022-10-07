import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentPortal } from '@funle/entities';
import { Observable } from 'rxjs';
import { AssignmentStore } from 'src/app/services/assignments/assignmentStore';

@Component({
  selector: 'funle-portal-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  assignments$: Observable<AssignmentPortal[]>;
  message404Title = 'Hier zou het staan';
  messageErrorTitle = 'Er is iets fout gegaan';
  messageTitle = '';
  nothingFound = true;
  somethingWentWrong = false;

  constructor(private router: Router, private route: ActivatedRoute, private assignmentsStore: AssignmentStore) { }

  ngOnInit(): void {
    this.getAssignments()
  }

  private getAssignments() {
    this.assignments$ = this.assignmentsStore.getAssignmentsWithProposals()
  }

  toPage(page: string) {
    this.router.navigate([page]);
  }

  onAssignmentSelected(id: string) {
    console.log(id);
    this.router.navigate([id], { relativeTo: this.route });
  }

}
