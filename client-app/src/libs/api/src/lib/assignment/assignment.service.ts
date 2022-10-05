import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {AssignmentPortal } from '@funle/entities';

@Injectable({
  providedIn: 'root',
})
export class PortalAssignmentService { 
  assignments: any;

  constructor(private http: HttpClient) {}

  getAll = () => this.http.get<AssignmentPortal[]>('/api/assignments/');

  get = (id: string) => this.http.get<AssignmentPortal>('/api/assignments/' + id);

  getAssignmentsWithProposals = () => this.http.get('/api/assignments/proposals/');
}