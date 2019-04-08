import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs';

import { EUsersListActions, GetUsersSuccess } from '../actions/users-list.actions'
import { UsersListService } from '../../pages/home/users-list/users-list.service';
import { IUser } from 'src/app/models/user.interface'


@Injectable()
export class UsersListEffects {
  pages: number[] = [1, 2, 3];

  constructor(
    private actions$: Actions,
    private usersListService: UsersListService
    ) {}
  
  @Effect()
  loadUsersList$ = this.actions$.pipe(
    ofType(EUsersListActions.GET_USERS),
    switchMap(() =>
      forkJoin(
        this.pages.map(page =>
          this.usersListService.getUsers(page)))),
    map(pages =>
      pages.reduce((acc, page) =>
        acc.concat(page.data),[])),
    map(list => new GetUsersSuccess(list)))

}