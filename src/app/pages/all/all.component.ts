import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'funle-portal-dashboard',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.scss'],
  })
  export class AllComponent {

    constructor(private router: Router) {}

    assignments = []

    nothingFound = true;
    // somethingWentWrong = true;

    toPage(page: string) {
      this.router.navigate([page]);
    }

  }