import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { take, map, mergeMap } from 'rxjs/operators';
import { IBaseProposal, BaseProposal } from '@funle/entities';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class ProposalService {
  api = this.apiService.for<BaseProposal, IBaseProposal>('proposals');

  constructor(private apiService: ApiService) {}

  get = (id: number) => this.api.get(id);

  getMatches = () => this.api.get(`matches`);

  getByStatus = (id: number) => this.api.get(`withstatus/${id}`);

  getByCandidateId = (id: number) => this.api.get(`candidate/${id}`);

  post = (proposal: Partial<BaseProposal>) => this.api.post(undefined, proposal);

  postPublicProposal = (assignmentGuid: string) => this.api.post(assignmentGuid, {});

  notifyNewMatches = (candidateId: number) => this.api.get(`matchnotification/${candidateId}`);

  put = (proposal: Partial<BaseProposal>) => this.api.put(proposal?.id, proposal);

  delete = (id: number) => this.api.delete<undefined>(id);
}
