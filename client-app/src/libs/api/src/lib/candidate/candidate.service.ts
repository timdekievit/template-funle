import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidatePortal } from '@funle/entities';

@Injectable({
  providedIn: 'root',
})
export class PortalCandidateService {

  constructor( private http: HttpClient) {}

  getall = () => this.http.get<CandidatePortal[]>('/api/candidates/')
  put = (candidate: any) => this.http.put('/api/candidates/' + candidate.id, candidate);
  
}
