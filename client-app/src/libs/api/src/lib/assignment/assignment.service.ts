import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {AssignmentPortal } from '@funle/entities';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PortalAssignmentService { 

  constructor(private http: HttpClient) {}

  getAll = () => this.http.get<AssignmentPortal[]>('/api/assignments/').pipe(
    shareReplay()
  );

  get = (id: string) => this.http.get<AssignmentPortal>('/api/assignments/' + id).pipe(
    shareReplay()
  );

  getAssignmentsWithProposals = () => this.http.get<AssignmentPortal[]>('/api/assignments/proposals/').pipe(
      shareReplay()
  );
}