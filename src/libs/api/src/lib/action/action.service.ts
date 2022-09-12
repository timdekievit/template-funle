import { Injectable } from '@angular/core';
import { BaseAction, IBaseAction, IBaseActionPage } from '@funle/entities';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  api = this.apiService.for<BaseAction, IBaseAction>('actions');

  constructor(private apiService: ApiService) {}

  get = (candidateId?: number, skip?: number, limit?: number, all?: boolean) =>
    this.api.get<IBaseActionPage>('?' + this.toQuery({ candidateId, skip, limit, all }));
  getOne = (id: number) => this.api.get(id);
  post = (action: Partial<BaseAction>) => this.api.post(undefined, action);
  put = (action: Partial<BaseAction>) => this.api.put(action.id, action);
  patch = (action: Partial<BaseAction>) => this.api.patch(action.id, action);
  delete = (id: number) => this.api.delete(id);

  private toQuery(params: {}) {
    if (!params) {
      return '';
    }

    return Object.keys(params)
      .filter(key => !!params[key])
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  }
}
