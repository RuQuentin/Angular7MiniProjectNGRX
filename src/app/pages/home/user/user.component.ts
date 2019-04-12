import { Component, Input } from '@angular/core';
import { UsersListService } from '../users-list/users-list.service';

import { Store, select } from '@ngrx/store';

import { IAppState } from '../../../store/state/app.state';
import { selectUsersList, selectUser } from '../../../store/selectors/users-list.selectors'

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{
  usersList$ = this.store.pipe(select(selectUsersList));
  user$ = this.store.pipe(select(selectUser));
  
  constructor(
    private usersListService: UsersListService,
    private store: Store<IAppState>
    ) {}
}