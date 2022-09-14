import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { take, map, mergeMap } from 'rxjs/operators';
import { IBaseCandidate, BaseCandidate, IBaseIncentiveLink, ILinkedCandidates } from '@funle/entities';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class PortalCandidateService {
  api = this.apiService.for<BaseCandidate, IBaseCandidate>('candidates');

  constructor(private apiService: ApiService, private http: HttpClient) {}

  get = () => this.http.get('http://localhost:5000/api/candidates/2E386ECA-F7C7-4ED6-8E4C-DF8520881133');

  // get = () => this.api.get();
  // getSkills = () => this.api.get('skills');
  // getAgreement = () => this.api.get('termsandconditions');
  // getIncentiveLink = () => this.api.get<IBaseIncentiveLink>('incentivelink');
  // getLinkedCandidates = () => this.api.get<ILinkedCandidates>('linkedcandidates');
  // ensureRequiredInfo = () => this.api.get('ensurerequiredinfo');

  // getProfileStatus = () => this.api.get('profile');

  // put = (candidate: BaseCandidate) => this.api.put(null, candidate);
  // patch = (candidate: BaseCandidate) => this.api.patch(null, candidate);
  // postCv = (cv: File) => this.api.post('cv', this.createFormData(cv));

  // downloadCv = () => this.api.get<Blob>('cv', { responseType: 'blob' });

  // updateAvailability = (candidate: BaseCandidate) => this.api.put('availability', candidate);

  // addSkill = (value: string) => this.api.post('skills', { value: value });

  // deleteSkill = (id: number) => this.api.delete(`skills/${id}`);

  private createFormData(cv: File): FormData {
    const formData = new FormData();
    formData.append('cv', cv, cv.name);
    return formData;
  }
}
