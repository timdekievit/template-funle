import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthConfig } from '../auth.config';

@Injectable({
  providedIn: 'root'
})
export class LinkedInAuthService {

  constructor(private authConfig: AuthConfig, private apiService: ApiService,) {

  }

  private loginUrl(state?: string) {
    let redirectUri = `${this.host}${this.authConfig.linkedin.callback}`;
    return `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${this.clientId}&redirect_uri=${redirectUri}&state=${encodeURIComponent(state)}&scope=r_emailaddress`;
  }

  private get host() {
    const origin =  window.location.origin;
    if (origin.indexOf('4203') >= 0) {
      return 'https://localhost:5003';
    }
    return origin;
  }

  private get clientId() {
    return this.authConfig.linkedin.clientId;
  }

  linkedInLogin = (state?: string) => window.location.href = this.loginUrl(state);
  // login = (code) => this.apiService.get<any>(window.location.origin.concat('/api/account/login/linkedin?code=') + code + `&redirectUri=${this.host}${this.authConfig.linkedin.callback}`);
}