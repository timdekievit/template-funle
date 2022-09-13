import { ValueProvider, FactoryProvider, Injectable, ClassProvider } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
// import { IApiConfig, ApiConfig, API_CONFIG_TOKEN } from './api.config';
import { tap } from 'rxjs/operators';

export interface ApiOptions {
  headers: HttpHeaders;
  params: HttpParams;
  responseType?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService<Type = any, Response = any> {
  token$ = new ReplaySubject<string>(1);
  provider$ = new ReplaySubject<string>(1);

  // static createProvider(config: IApiConfig): (ValueProvider | ClassProvider | FactoryProvider)[] {
  //   return [
  //     { provide: API_CONFIG_TOKEN, useValue: config },
  //     { provide: ApiConfig, useClass: ApiConfig, deps: [API_CONFIG_TOKEN] },
  //     { provide: ApiService, useClass: ApiService, deps: [ApiConfig, HttpClient] },
  //   ];
  // }

  // constructor(public config: ApiConfig, public http: HttpClient) {
  //   this.setToken(this.tokenFromStorage);
  //   this.setProvider(this.providerFromStorage);
  // }

  constructor(public http: HttpClient) {
    // this.setToken(this.tokenFromStorage);
    // this.setProvider(this.providerFromStorage);
  }

  // get tokenFromStorage(): string {
  //   return window.localStorage.getItem(this.config.tokenKey);
  // }

  // get providerFromStorage(): string {
  //   return window.localStorage.getItem('provider');
  // }

  get headers() {
    return new HttpHeaders();
  }

  get params() {
    return new HttpParams();
  }

  get options(): Partial<ApiOptions> & { responseType: 'json' } {
    return { headers: this.headers, params: this.params, responseType: 'json' };
  }

  for<T = Type, R = Response>(endpoint: string | number): ApiService<T, R> {
    if (!endpoint) return this;

    // const config = Object.assign({}, this.config, { uri: this.createUri(endpoint) });
    // const apiConfig = new ApiConfig(config);
    
    const constructor = this.constructor as typeof ApiService;

    return new constructor<T, R>(this.http);
  }

  get<R = Response>(endpoint?: string | number, { headers, params, responseType }: Partial<ApiOptions> = this.options) {
    const uri = this.createUri(endpoint);
    const options = this.createOptions({ headers, params, responseType });

    return this.http.get<R>(uri, options).pipe(tap(response => {}));
  }

  post<R = Response, T = Type>(
    endpoint?: string | number,
    body?: T,
    { headers, params, responseType }: Partial<ApiOptions> = this.options
  ) {
    const uri = this.createUri(endpoint);
    const options = this.createOptions({ headers, params, responseType });

    return this.http.post<R>(uri, body, options).pipe(tap(response => {}));
  }

  put<R = Response, T = Type>(
    endpoint?: string | number,
    body?: T,
    { headers, params, responseType }: Partial<ApiOptions> = this.options
  ) {
    const uri = this.createUri(endpoint);
    const options = this.createOptions({ headers, params, responseType });

    return this.http.put<R>(uri, body, options).pipe(tap(response => {}));
  }

  patch<R = Response, T = Type>(
    endpoint?: string | number,
    body?: T,
    { headers, params, responseType }: Partial<ApiOptions> = this.options
  ) {
    const uri = this.createUri(endpoint);
    const options = this.createOptions({ headers, params, responseType });

    return this.http.patch<R>(uri, body, options).pipe(tap(response => {}));
  }

  delete<R = Response>(
    endpoint?: string | number,
    { headers, params, responseType }: Partial<ApiOptions> = this.options
  ) {
    const uri = this.createUri(endpoint);
    const options = this.createOptions({ headers, params, responseType });

    return this.http.delete<R>(uri, options).pipe(tap(response => {}));
  }

  // setToken(token: string): void {
  //   const authorization = token ? this.prefixToken(token) : undefined;

  //   this.token$.next(authorization);

  //   if (token) {
  //     window.localStorage.setItem(this.config.tokenKey, authorization);
  //   } else {
  //     window.localStorage.removeItem(this.config.tokenKey);
  //   }
  // }

  setProvider(provider: string): void {
    this.provider$.next(provider);

    if (provider) {
      window.localStorage.setItem('provider', provider);
    } else {
      window.localStorage.removeItem('provider');
    }
  }

  createUri(endpoint: string | number) {
    if (!endpoint) {
      return 'http://localhost:3000';
    }

    const uri = endpoint.toString();

    // return uri.includes('http') || uri.includes('api/funle') ? uri : this.config.uri.concat('/', uri);
    return 'http://localhost:3000'.concat('/', uri);
  }

  createOptions(options: ApiOptions): ApiOptions & { responseType: 'json' } {
    if (!options) return this.options as ApiOptions & { responseType: 'json' };

    const toObject = (httpClass: HttpHeaders | HttpParams) => {
      return (object, attribute) => ({ ...object, [attribute]: httpClass.get(attribute) });
    };

    const toInstance = (httpClass: HttpHeaders | HttpParams, [attribute, value]) => {
      return httpClass.has(attribute) ? httpClass : httpClass.append(attribute, value);
    };

    const headersObject =
      options.headers instanceof HttpHeaders
        ? options.headers.keys().reduce(toObject(options.headers), {})
        : options.headers;

    const paramsObject =
      options.params instanceof HttpParams
        ? options.params.keys().reduce(toObject(options.params), {})
        : options.params;

    const headers = (headersObject
      ? Object.entries(headersObject).reduce(toInstance, this.options.headers)
      : this.options.headers) as HttpHeaders;

    const params = (paramsObject
      ? Object.entries(paramsObject).reduce(toInstance, this.options.params)
      : this.options.params) as HttpParams;

    return Object.assign({}, this.options, { ...options, headers, params });
  }

  private prefixToken(token: string) {
    if (token.includes('Bearer')) {
      return token;
    }

    return `Bearer ${token}`;
  }
}