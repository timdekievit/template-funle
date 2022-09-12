import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { take, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { BaseTag, IBaseTag } from '@funle/entities';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  api = this.apiService.for<BaseTag, IBaseTag>('tags');

  constructor(private apiService: ApiService) {}

  get = (id: number) => this.api.get(id);

  post = (tag: Partial<BaseTag>) => this.api.post(tag.candidateId, tag);

  put = (tag: Partial<BaseTag>) => this.api.put(tag.id, tag);

  delete = (tag: Partial<BaseTag>) => this.api.delete<undefined>(`${tag.candidateId}/${tag.id}`);
}
