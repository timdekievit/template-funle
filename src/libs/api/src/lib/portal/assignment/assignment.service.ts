import { Injectable } from '@angular/core';
import { BaseFavoriteAssignmentOverview, IBaseFavoriteAssignmentOverview, IBasePortalAssignment, BasePortalAssignment, BaseDeclinedProposal, BaseAcceptedProposal } from '@funle/entities';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root',
})
export class PortalAssignmentService {
  api = this.apiService.for<BasePortalAssignment, IBasePortalAssignment>('assignments');
  apiFavorites = this.apiService.for<BasePortalAssignment[], IBasePortalAssignment[]>('assignments');

  constructor(private apiService: ApiService) {}

  getMatching = () => this.api.get('matching');
  getFavorites = (overviewCount: number) => this.apiFavorites.get(`favorites?overviewCount=${overviewCount}`);
  getSaved = () => this.api.get('saved');
  getAll = () => this.api.get('all');
  get = (id: number) => this.api.get(id);
  getCreated = (id: number) => this.api.get(`created/${id}`);
  getStatus = (status: string) => this.api.get(`status/${status}`);

  save = (id, saved) => this.api.put(`${id}`, saved);
  favorite = (id, favorite) => this.api.put(`${id}`, favorite);

  accept = (acceptedProposal: BaseAcceptedProposal) => this.api.put('accept', acceptedProposal);
  decline = (id: number) => this.api.put(`decline/${id}`);
  declinedReason = (declinedReason: BaseDeclinedProposal) => this.api.put('declineReason', declinedReason); 
  
}
