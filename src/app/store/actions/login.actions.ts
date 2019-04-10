import { Action } from '@ngrx/store';

import { ILoginData } from '../../models/login-data.interface';
import { IToken } from '../../models/token.interface'

export enum ELoginActions {
  LOGIN = '[LOGIN] Login',
  LOGIN_SUCCESS = '[LOGIN] Login Success',
  LOGIN_UNSUCCESS = '[LOGIN] Login Unsuccess'
}

export class Login implements Action {
  public readonly type = ELoginActions.LOGIN;
  constructor(public payload: ILoginData) {};
}

export class LoginSuccess implements Action {
  public readonly type = ELoginActions.LOGIN_SUCCESS;
  constructor(public payload: IToken) {};
}

export class LoginUnsuccess implements Action {
  public readonly type = ELoginActions.LOGIN_UNSUCCESS;
  constructor(public payload: any) {};
}

export type LoginActions = Login | LoginSuccess | LoginUnsuccess;