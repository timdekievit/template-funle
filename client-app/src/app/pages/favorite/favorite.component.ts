import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentPortal } from '@funle/entities';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AssignmentEntityService } from 'src/app/services/assignments/assignment-enitity.service';

@Component({
  selector: 'funle-portal-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  assignments: any;
  assignments$: Observable<AssignmentPortal[]> 
  message404Title = 'Hier zou het staan';
  messageErrorTitle = 'Er is iets fout gegaan';
  messageTitle = '';
  nothingFound = true;
  somethingWentWrong = false;

  constructor(private router: Router, private route: ActivatedRoute, private assignmentService: AssignmentEntityService) { }

  ngOnInit(): void {
    this.assignments$ = this.assignmentService.entities$.pipe(
      map(assignments => assignments.filter(assignment => assignment.proposals.length != 0))
    )

    this.assignments$.subscribe(assignments => this.assignments = assignments);

    console.log(this.assignments);
  }

  toPage(page: string) {
    this.router.navigate([page]);
  }

  onAssignmentSelected(id: string) {
    console.log(id);
    this.router.navigate([id], { relativeTo: this.route });
  }

}
