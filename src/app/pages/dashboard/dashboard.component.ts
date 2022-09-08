import { Component, OnInit } from '@angular/core';
import { IBaseDashboard } from '@funle/entities';

@Component({
  selector: 'funle-portal-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard: IBaseDashboard

  get isSearching(): boolean {
    return this.dashboard?.mainScenario === 1 || this.dashboard?.mainScenario === 2;
  } 

  get isNotSearching(): boolean {
    return this.dashboard?.mainScenario === 3 || this.dashboard?.mainScenario == 4;
  } 

  get isInactive(): boolean {
    return this.dashboard?.mainScenario === 0;
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
