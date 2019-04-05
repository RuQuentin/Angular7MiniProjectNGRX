import { EUsersListActions } from '../actions/users-list.actions';
import { UsersListActions } from '../actions/users-list.actions';
import { IUsersListState, initialUsersListState } from '../state/users-list.state';

export const usersListReducers = (
  state = initialUsersListState,
  action: UsersListActions,
): IUsersListState => {
  switch (action.type) {
    case EUsersListActions.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload
      }
    }

    case EUsersListActions.SELECT_USER: {
      return {
        ...state,
        selectedUser: action.payload
      }
    }

    default:
      return state;
  }
}