import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PortalCandidateService {

  constructor( private http: HttpClient) {}

  getall = () => this.http.get('/api/candidates/')
  put = (candidate: any) => {
    console.log(candidate);
    this.http.put('/api/candidates/' + candidate.id, candidate).subscribe();
  }
}
