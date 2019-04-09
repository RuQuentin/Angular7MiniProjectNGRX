import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';

import { API_URL } from '../../shared/config';
import { IToken } from '../../models/token.interface';

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  checkSuccess(): any {
    return this.localStorage.retrieve('success');
  }

  toggleSuccess(): any {
    if ( !this.localStorage.retrieve('success') ) {
      this.localStorage.store('success', true);
    } else {
      this.localStorage.store('success', false);
    }
  }

  setToken(token): void {
    this.localStorage.store('token', token);
  }

  getToken(): IToken {
    return this.localStorage.retrieve('token');
  }
  
  clearToken(): void {
    this.localStorage.clear('token');
  }

  sendLoginRequest(userData): Observable<IToken> {
    const body = this.checkSuccess() ? userData : userData.email;

    return this.http.post<IToken>(`${API_URL}/login`, body)
  }
}