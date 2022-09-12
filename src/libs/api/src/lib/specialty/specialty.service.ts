import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { take, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { BaseSpecialty, IBaseSpecialty } from 'src/libs/entities/src/lib/specialty/specialty';

@Injectable({
  providedIn: 'root',
})
export class SpecialtyService {
  api = this.apiService.for<BaseSpecialty, IBaseSpecialty>('specialties');

  constructor(private apiService: ApiService) {}

  get = (id: number) => this.api.get(id);

  post = (specialty: Partial<BaseSpecialty>) => this.api.post(specialty.candidateId, specialty);

  put = (specialty: Partial<BaseSpecialty>) => this.api.put(specialty.id, specialty);

  delete = (specialty: Partial<BaseSpecialty>) => this.api.delete<undefined>(`${specialty.candidateId ?? ''}${specialty.candidateId ? '/' : ''}${specialty.id}`);
}
