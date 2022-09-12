import { ClassProvider, FactoryProvider, Injectable, ValueProvider } from '@angular/core';
import { tap, map, mergeMap, take, catchError } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, from, Observable, of } from 'rxjs';
import { HttpEvent, HttpHeaders } from '@angular/common/http';
import { IBaseCandidate } from '@funle/entities';

import { ApiService } from '../api.service';
import { GoogleAuthService } from './google-auth/google-auth.service';
import { MicrosoftAuthService } from './microsoft-auth/microsoft-auth.service';
import { LinkedInAuthService } from './linkedin-auth/linkedin-auth.service';
import { IAuthConfig, AuthConfig, AUTH_CONFIG_TOKEN } from './auth.config';
import { PortalAuthService } from './portal/portal-auth.service';
import { RecruiterAuthService } from './recruiter/recruiter-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = this.apiService.for<unknown, unknown>(window.location.origin.concat('/api/funle/account'));
  hasToken$ = this.apiService.token$.pipe(map(token => Boolean(token)));
  candidate$ = new BehaviorSubject<IBaseCandidate>(undefined);

  static createProviders(config: IAuthConfig): (ValueProvider | FactoryProvider | ClassProvider)[] {
    return [
      { provide: AUTH_CONFIG_TOKEN, useValue: config },
      { provide: AuthConfig, useClass: AuthConfig, deps: [AUTH_CONFIG_TOKEN] },
      { provide: GoogleAuthService, useClass: GoogleAuthService, deps: [AuthConfig] },
      { provide: LinkedInAuthService, useClass: LinkedInAuthService, deps: [AuthConfig, ApiService] },
      { provide: PortalAuthService, useClass: PortalAuthService, deps: [ApiService] },
      { provide: RecruiterAuthService, useClass: RecruiterAuthService, deps: [ApiService] },
      { provide: AuthService, useClass: AuthService, deps: [ApiService, GoogleAuthService, MicrosoftAuthService, LinkedInAuthService, PortalAuthService, RecruiterAuthService] },
    ];
  }

  constructor(
    private apiService: ApiService,
    private googleAuthService: GoogleAuthService,
    private microsoftAuthService: MicrosoftAuthService,
    private linkedInAuthService: LinkedInAuthService,
    private portalAuthService: PortalAuthService,
    private recruiterAuthService: RecruiterAuthService,
  ) {}

  loginGoogle = () => {
    return from(this.googleAuthService.login())
      .pipe(
        mergeMap(response => this.login(response.id_token, 'Google')),
        take(1),
      );
  }

  loginMicrosoft() {
    return from(this.microsoftAuthService.login())
      .pipe(
        mergeMap(response => this.login(response.idToken, 'Microsoft')),
        take(1),
      );
  }

  // portal login
  linkedInLogin(incentive?: string) {
    const state = this.encodeState(incentive);
    this.linkedInAuthService.linkedInLogin(state);
  }

  linkedInCode(code) {
    // return this.linkedInAuthService.login(code);
  }

  logoutPortal() {
    return this.portalAuthService.logout();
  }

  googleRecruiterLogin = () => {
    return this.googleAuthService.loginRecruiter();
  }

  logoutRecruiter() {
    return this.recruiterAuthService.logout();
  }

  googleLogin = (incentive?: string) => {
    const state = this.encodeState(incentive);
    return this.googleAuthService.loginPortal(state);
  }

  microsoftLogin = (incentive?: string) => {
    const state = this.encodeState(incentive);
    return this.microsoftAuthService.loginPortal(state);
  }


  loginLinkedIn(code) {
    // return this.linkedInAuthService.login(code)
    //   .pipe(
    //     mergeMap((response: any) => this.login(response.access_token, 'LinkedIn')),
    //     take(1),
    //   );
  }

  initialize(): Observable<{ candidate?: IBaseCandidate }> {
    return combineLatest([this.api.token$, this.api.provider$])
      .pipe(
        mergeMap(([token, provider]) => this.login(token, provider)),
        catchError(() => of(undefined)),
      );
  }

  private encodeState(incentive?: string): string {
    let state = {
      incentive: incentive
    };
    let encodedState = btoa(JSON.stringify(state));
    console.log(encodedState);
    return encodedState;
  }

  private login(token: string, provider: string): Observable<IBaseCandidate> {
    const authorization = `Bearer ${token}`;
    const headers = new HttpHeaders({ Authorization: authorization, Provider: provider });

    this.apiService.setProvider(provider)

    return this.api.get<IBaseCandidate>('login', { headers })
      .pipe(
        tap(response => this.candidate$.next(response)),
        tap(() => this.apiService.setToken(token)),
      );
  }

  // logout(){
  //   return this.apiService.provider$
  //     .pipe(
  //       take(1),
  //       mergeMap((provider) => {
  //         switch(provider) {
  //           case 'Google':
  //             return from(this.googleAuthService.logout());
  //           case 'Microsoft':
  //             return from(this.microsoftAuthService.logout());
  //           default:
  //             return of(undefined);
  //         }
  //       }),
  //     tap(() => this.candidate$.next(undefined)),
  //     tap(() => this.apiService.setToken(undefined)),
  //     tap(() => this.apiService.setProvider(undefined)),
  //     mergeMap(() => this.api.get<HttpEvent<unknown>>('logout', undefined)),
  //     take(1),
  //   );
  // }
}
