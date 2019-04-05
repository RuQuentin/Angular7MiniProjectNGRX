import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IUsersListState } from '../state/users-list.state'


const selectUsers = (state: IAppState) => state.usersList;

export const selectUsersList = createSelector(
  selectUsers,
  (state: IUsersListState) => state.users
);

export const selectUser = createSelector(
  selectUsers,
  (state: IUsersListState) => state.selectedUser
)