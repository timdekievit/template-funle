import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortalAssignmentService } from '@funle/api';
import { Observable } from 'rxjs';
import { Assignment } from 'src/app/models/assignment';
import { AssignmentEntityService } from 'src/app/services/assignments/assignment-enitity.service';

@Component({
  selector: 'funle-portal-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.scss']
})
export class AttentionComponent implements OnInit {

  assignments$: Observable<Assignment[]>;
  message404Title = 'Hier zou het staan';
  messageErrorTitle = 'Er is iets fout gegaan';
  messageTitle = '';
  nothingFound = true;
  somethingWentWrong = false;

  constructor(private router: Router, private route: ActivatedRoute, private assignmentService: AssignmentEntityService) { }

  ngOnInit(): void {
    this.assignments$ = this.assignmentService.entities$
  }

  onAssignmentSelected(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  toPage(page: string) {
    this.router.navigate([page]);
  }

}
