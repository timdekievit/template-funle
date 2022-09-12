import { InjectionToken } from '@angular/core';

export interface IAuthProviderConfig {
  clientId: string;
  callback?: string;
  logging?: boolean;
}

export type IAuthConfig = Record<string, IAuthProviderConfig>

export class AuthConfig implements IAuthConfig {
  [provider: string]: IAuthProviderConfig;

  constructor(config: IAuthConfig) {
    Object.entries(config).forEach(([attribute, value]) => {
      this[attribute] = value;
    });
  }
}

export const AUTH_CONFIG_TOKEN = new InjectionToken<IAuthConfig>('AUTH_CONFIG_TOKEN');
