import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersListService } from './users-list.service';
// import { MatSort, MatTableDataSource } from '@angular/material';

import { IUser } from '../../../models/user.interface';
import * as usersListActions from '../../../store/actions/users-list.actions'

import { Store, select } from '@ngrx/store';

import { IAppState } from '../../../store/state/app.state';
import { GetUsers, SelectUser } from '../../../store/actions/users-list.actions';
import { selectUsersList } from '../../../store/selectors/users-list.selectors';
import { getInitialInstance } from '../../../store/state/app.state'

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList$ = this.store.pipe(select(selectUsersList));

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'avatar']
  
  // dataSource = new MatTableDataSource(this.listOfUsers);
  // @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private store: Store<IAppState>
    ) {}
    
  ngOnInit() {
    this.store.dispatch(new GetUsers())
  };

  chooseUser(id: string) {
    this.store.dispatch(new SelectUser(id));
  }
}