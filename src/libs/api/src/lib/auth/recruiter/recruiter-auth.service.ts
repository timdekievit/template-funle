import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthConfig } from '../auth.config';

@Injectable({
  providedIn: 'root'
})
export class RecruiterAuthService {

  constructor(private apiService: ApiService,) {

  }

  logout = () => this.apiService.get<any>(window.location.origin.concat('/api/account/logout/recruiter'));
}