import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { take, map, mergeMap } from 'rxjs/operators';
import { IBaseCandidate, BaseCandidate, ILinkedCandidate, LinkedCandidate, BaseIncentive, IBaseIncentive, ICandidateSeach, ICandidateSeachResult } from '@funle/entities';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  api = this.apiService.for<BaseCandidate, IBaseCandidate>('candidates');

  constructor(private apiService: ApiService) {}

  get = (id: number) => this.api.get(id);

  search = (params: ICandidateSeach) => this.api.get<ICandidateSeachResult>('?' + this.toQuery(params));

  getSearching = (id: number) => this.api.get(`searching`);

  getMatching = (id: number) => this.api.get(`matching`);

  getReferrer = (id: number) => this.api.get([id, 'referrer'].join('/'));

  getLinkedCandidates = (id: number) => this.api.get([id, 'linked'].join('/'));

  getLinkedCandidate = (id: number, incentiveId: number) => this.api.get<ILinkedCandidate>([id, 'linked', incentiveId].join('/'));

  post = (candidate: Partial<BaseCandidate>) => this.api.post(undefined, candidate);

  put = (candidate: Partial<BaseCandidate>) => this.api.put(candidate.id, candidate);

  patchIncentive = (id: number, incentiveId: number, incentive: Partial<BaseIncentive>) => this.api.patch<IBaseIncentive, Partial<BaseIncentive>>([id, 'linked', incentiveId].join('/'), incentive);

  delete = (id: number) => this.api.delete<undefined>(id);

  deleteLinkedCandidate = (id: number, incentiveId: number) => this.api.delete<undefined>([id, 'linked', incentiveId].join('/'));

  upload = (candidate: Partial<BaseCandidate>) => this.api.post([candidate.id, 'cv'].join('/'), this.createFormData(candidate));

  download = (id: number) => this.api.get<Blob>([id, 'cv'].join('/'), { responseType: 'blob' });

  activate = (id: number) => this.api.post([id, 'activate'].join('/'));

  private createFormData(candidate: Partial<BaseCandidate>): FormData {
    if (!candidate.cv) return;

    const formData = new FormData();
    formData.append('cv', candidate.cv, candidate.cv.name);
    return formData;
  }

  private toQuery(params: ICandidateSeach) {
    if (!params) {
      return '';
    }

    return Object.keys(params)
      .filter(key => !!params[key])
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  }
}
