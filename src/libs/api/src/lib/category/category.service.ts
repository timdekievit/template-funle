import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { take, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { BaseCategory, IBaseCategory } from '@funle/entities';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  api = this.apiService.for<BaseCategory, IBaseCategory>('categories');

  constructor(private apiService: ApiService) {}

  get = (id: number) => this.api.get(id);
}
