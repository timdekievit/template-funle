import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortalAssignmentService } from '@funle/api';

@Component({
  selector: 'funle-portal-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  assignments: any;
  message404Title = 'Hier zou het staan';
  messageErrorTitle = 'Er is iets fout gegaan';
  messageTitle = '';
  nothingFound = true;
  somethingWentWrong = false;

  constructor(private router: Router, private route: ActivatedRoute, private assignmentService: PortalAssignmentService) { }

  ngOnInit(): void {
    this.assignmentService.getAll().subscribe(res => {
      this.assignments = res;
      console.log(this.assignments);
    });
  }

  toPage(page: string) {
    this.router.navigate([page]);
  }

  onAssignmentSelected(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }

}
