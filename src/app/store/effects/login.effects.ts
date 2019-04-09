import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { ELoginActions, LoginActions, Login, LoginSuccess, LoginUnsuccess, LoginEmpty } from '../actions/login.actions';
import { LoginService } from '../../pages/login/login.service';
import { IToken } from '../../models/token.interface'


@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}

  @Effect()
  logIn$ = this.actions$.pipe(
    ofType(ELoginActions.LOGIN),
    switchMap((action: Login) => this.loginService.sendLoginRequest(action.payload)
      .pipe(
        map(response => new LoginSuccess(response)),
        catchError(error => of(new LoginUnsuccess(error)))
      )
    )
  )
        
  @Effect()
  logInSuccess$ = this.actions$.pipe(
    ofType(ELoginActions.LOGIN_SUCCESS),
    map((action: LoginSuccess) => {
      this.loginService.toggleSuccess();
      this.loginService.setToken(action.payload);
      this.router.navigate(['/home']);
      return new LoginEmpty();
    })
  )

  @Effect()
  logInUnsuccess$ = this.actions$.pipe(
    ofType(ELoginActions.LOGIN_UNSUCCESS),
    map((action: LoginUnsuccess) => {
      console.log(action.payload);
      this.loginService.toggleSuccess();
      this.loginService.clearToken();
      return new LoginEmpty();
    })
  )
}