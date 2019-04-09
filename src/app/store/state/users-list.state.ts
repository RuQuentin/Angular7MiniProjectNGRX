import { IUser } from '../../models/user.interface'

export interface IUsersListState {
  users: IUser[];
  selectedUser: string;
}

export const initialUsersListState: IUsersListState = {
  users: null,
  selectedUser: null
}