import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortalAssignmentService } from '@funle/api';
import { AssignmentPortal } from '@funle/entities';
import { Observable } from 'rxjs';

@Component({
  selector: 'funle-portal-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.scss']
})
export class AttentionComponent implements OnInit {

  assignments$: Observable<AssignmentPortal[]>;
  message404Title = 'Hier zou het staan';
  messageErrorTitle = 'Er is iets fout gegaan';
  messageTitle = '';
  nothingFound = true;
  somethingWentWrong = false;

  constructor(private router: Router, private route: ActivatedRoute, private assignmentService: PortalAssignmentService) { }

  ngOnInit(): void {
    this.assignments$ = this.assignmentService.getAll()
  }

  onAssignmentSelected(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  toPage(page: string) {
    this.router.navigate([page]);
  }

}
