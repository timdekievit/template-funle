/// <reference types="@types/gapi.auth2" />

import { Injectable } from '@angular/core';
import { AuthConfig } from '../auth.config';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  constructor(private authConfig: AuthConfig) {
    gapi.load('client', () => this.init());
  }

  private get clientId() {
    return this.authConfig.google?.clientId;
  }
// https://www.googleapis.com/auth/userinfo.email

  private init(){
    if (this.clientId) {
      gapi.client.init({
        clientId: this.clientId,
        scope: 'email',
        
        // discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
      });

      // gapi.auth
    }
  }

  private loginUrl(state?: string) {
    let redirectUri = this.host.concat('/api/account/Login/google');
    return `https://accounts.google.com/o/oauth2/v2/auth?scope=email&include_granted_scopes=false&response_type=code&client_id=${this.clientId}&redirect_uri=${redirectUri}&state=${encodeURIComponent(state)}&access_type=offline&prompt=consent`;
  }

  private get loginRecruiterUrl() {
    return `https://accounts.google.com/o/oauth2/v2/auth?scope=email&include_granted_scopes=false&response_type=code&client_id=${this.clientId}&redirect_uri=${this.host.concat('/api/account/Login/google/recruiter')}&state=foobar&access_type=offline&prompt=consent`;
  }

  private get host() {
    const origin =  window.location.origin;
    if (origin.indexOf('4203') >= 0 || origin.indexOf('4201') >= 0) {
      return 'https://localhost:5003';
    }
    return origin;
  }

  login = () => gapi.auth2.getAuthInstance().signIn({ prompt: 'select_account' }).then(response => response.getAuthResponse());

  loginPortal = (state?: string) => window.location.href = this.loginUrl(state);
  loginRecruiter = () => window.location.href = this.loginRecruiterUrl;

  // loginPortal = () => gapi.auth2.authorize({client_id: this.clientId, scope: 'email', response_type: 'code', prompt: 'consent'}, () => {})

  logout = () => gapi.auth2.getAuthInstance().signOut();
}
