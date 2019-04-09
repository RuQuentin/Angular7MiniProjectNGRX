import { Action } from '@ngrx/store';

import { IUser } from '../../models/user.interface';

export enum EUsersListActions {
  GET_USERS = '[UsersList] Get Users',
  GET_USERS_SUCCESS = '[UsersList] Get Users Success',
  SELECT_USER = '[UsersList] Select User'
}

export class GetUsers implements Action {
  public readonly type = EUsersListActions.GET_USERS;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUsersListActions.GET_USERS_SUCCESS;
  constructor(public payload: IUser[]) {};
}

export class SelectUser implements Action {
  public readonly type = EUsersListActions.SELECT_USER;
  constructor(public payload: string) {};
}

export type UsersListActions = GetUsers
  | GetUsersSuccess
  | SelectUser;