import { Injectable } from '@angular/core';
import { BaseMatching, IBaseMatching } from '@funle/entities';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class MatchingService {
  api = this.apiService.for<BaseMatching, IBaseMatching>('matching');

  constructor(private apiService: ApiService) {}

  get = () => this.api.get<IBaseMatching[]>();
  getOne = (candidateId: number) => this.api.get<IBaseMatching>(candidateId);

  update = (id: number, matching: BaseMatching) => this.api.put(`${id}`, matching);
  check = (id: number) => this.api.put(`check/${id}`);
  checkByCandidateId = (id: number) => this.api.put(`checkByCandidateId/${id}`);
  stop = (id: number) => this.api.delete(`stop/${id}`);
}
