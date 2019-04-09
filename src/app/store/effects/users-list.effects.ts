import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { forkJoin, throwError } from 'rxjs';

import { EUsersListActions, GetUsersSuccess } from '../actions/users-list.actions'
import { UsersListService } from '../../pages/home/users-list/users-list.service';


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