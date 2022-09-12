import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { take, map, mergeMap } from 'rxjs/operators';
import { IBaseAssignment, BaseAssignment, IBaseSearchAssignment, BaseSearchAssignment } from '@funle/entities';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class AssignmentService {
  api = this.apiService.for<BaseAssignment, IBaseAssignment>('assignments');
  apiSearch = this.apiService.for<BaseSearchAssignment, IBaseSearchAssignment>('assignments');
  apiGetByGuid = this.apiService.for<BaseAssignment, IBaseAssignment>('/api/funle/public/assignments');

  constructor(private apiService: ApiService) {}

  search = (query: string) => this.apiSearch.get(query ?? 'all');

  getPossibleMatches = (candidateId: number) => this.api.get(`possibleMatches/${candidateId}`);

  getByGuid = (guid: string) => this.apiGetByGuid.get(guid);

  get = (id: number) => this.api.get(id ?? 'all');

  post = (assignment: Partial<BaseAssignment>) => this.api.post(undefined, assignment);

  put = (assignment: Partial<BaseAssignment>) => this.api.put(assignment.id, assignment);

  delete = (id: number) => this.api.delete<undefined>(id);
}
