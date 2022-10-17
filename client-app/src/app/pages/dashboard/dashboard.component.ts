import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'funle-portal-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  dashboard: any

  get isSearching(): boolean {
    return this.dashboard?.mainScenario === 1 || this.dashboard?.mainScenario === 2;
  } 

  get isNotSearching(): boolean {
    return this.dashboard?.mainScenario === 3 || this.dashboard?.mainScenario == 4;
  } 

  get isInactive(): boolean {
    return this.dashboard?.mainScenario === 0;
  }
  
  goTo(page: string) {
    this.router.navigate([page]);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
