import { Injectable } from '@angular/core';
import {
  PublicClientApplication,
  AuthenticationResult,
  AccountInfo,
  PopupRequest,
  Configuration,
  LogLevel
} from '@azure/msal-browser';
import { AuthConfig } from '../auth.config';


@Injectable({
  providedIn: 'root'
})
export class MicrosoftAuthService {
  private client: PublicClientApplication;

  private loginRequest: PopupRequest = {
    scopes: [],
    prompt: 'select_account',
  };

  private accounts: AccountInfo[];

  constructor(private authConfig: AuthConfig){
    const config = this.config;
    if (config) {
      this.client = new PublicClientApplication(this.config);
    }
  }

  private get account() {
    return this.accounts ? this.accounts[0] : undefined;
  }

  private get clientId() {
    return this.authConfig.microsoft?.clientId;
  }

  private get config(): Configuration {
    if (this.clientId) {
      return {
        auth: {
          clientId: this.clientId,
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: false,
        },
        system: {
          loggerOptions: {
            loggerCallback: (...args) => this.logger(...args),
          },
        },
      }
    }
  }

  login = () => this.client.acquireTokenPopup(this.loginRequest).then((response: AuthenticationResult) => this.mapAccount(response))

  logout = (account: AccountInfo = this.account) => this.client.logoutRedirect({ account, onRedirectNavigate: (url) => false });

  private loginUrl(state?: string) {
    let redirectUri = this.host.concat('/api/account/Login/microsoft');
    return `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${this.clientId}&response_type=code&redirect_uri=${redirectUri}&response_mode=query&scope=openid+email&state=${encodeURIComponent(state)}`;
  }

  loginPortal = (state?: string) => window.location.href = this.loginUrl(state);

  private mapAccount(response: AuthenticationResult) {
    this.accounts = this.client.getAllAccounts();
    return { ...response, account: this.account };
  }

  private get host() {
    const origin =  window.location.origin;
    if (origin.indexOf('4203') >= 0 || origin.indexOf('4201') >= 0) {
      return 'https://localhost:5003';
    }
    return origin;
  }

  private logger(level: LogLevel, message: string, containsPii: boolean) {
    if (containsPii || !this.authConfig.microsoft.logging) return;

    switch (level) {
      case LogLevel.Error:
        console.error(message);
        return;
      case LogLevel.Info:
        console.info(message); // eslint-disable-line no-restricted-syntax
        return;
      case LogLevel.Verbose:
        console.debug(message); // eslint-disable-line no-restricted-syntax
        return;
      case LogLevel.Warning:
        console.warn(message);
        return;
    }
  }
}
