import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { take, map, mergeMap } from 'rxjs/operators';
import { BaseDashboard, IBaseDashboard } from '@funle/entities';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  api = this.apiService.for<BaseDashboard, IBaseDashboard>('dashboard');

  constructor(private apiService: ApiService) {}

  get = () => this.api.get('');

  setSearch = () => this.api.put('search');
  setWhatsapp = () => this.api.put('whatsapp');
}
