import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidatePortal } from '@funle/entities';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PortalCandidateService {

  constructor( private http: HttpClient) {}

  getall = () => this.http.get<CandidatePortal[]>('/api/candidates/').pipe(
    shareReplay()
  );
  put = (candidate: any) => {
    console.log(candidate);
    this.http.put('/api/candidates/' + candidate.id, candidate).subscribe();
  }
}
