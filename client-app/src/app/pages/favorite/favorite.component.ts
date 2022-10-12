import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortalAssignmentService, PortalProposalService } from '@funle/api';
import { AssignmentPortal } from '@funle/entities';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { assignments$ } from 'src/app/services/assignments/assignments.repository';

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

  constructor(private router: Router, private route: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.assignments$ = assignments$
      .pipe(
          map(assignments => assignments.filter(assignment => assignment.proposals.length > 0))
      )
  };
  

  toPage(page: string) {
    this.router.navigate([page]);
  }

  onAssignmentSelected(id: string) {
    console.log(id);
    this.router.navigate([id], { relativeTo: this.route });
  }

}
