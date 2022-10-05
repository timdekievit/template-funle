import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PortalProposalService {
  constructor(private http: HttpClient) {}

  getAll = () => this.http.get('/api/proposals/');
  get = (id: string) => this.http.get('/api/proposals/' + id);
}