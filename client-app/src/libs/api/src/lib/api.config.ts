import { InjectionToken } from '@angular/core';
import { ApiService } from './api.service';

export interface IApiConfig {
  uri: string;
  tokenKey: string;
  service?: typeof ApiService;
}

export class ApiConfig implements IApiConfig {
  uri: string;
  tokenKey: string;
  service: typeof ApiService;

  constructor(config: IApiConfig) {
    Object.entries(config).forEach(([attribute, value]) => {
      this[attribute] = value;
    });
  }
}

// export const API_CONFIG_TOKEN = new InjectionToken<IApiConfig>('API_CONFIG_TOKEN');
