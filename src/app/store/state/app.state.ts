import { RouterReducerState } from '@ngrx/router-store';

import { IUsersListState, initialUsersListState } from './users-list.state';


export interface IAppState {
  router?: RouterReducerState,
  usersList: IUsersListState,
}

export const initialAppState = {
  usersList: initialUsersListState,
}

export function getInitialInstance(): IAppState {
  return initialAppState;
}