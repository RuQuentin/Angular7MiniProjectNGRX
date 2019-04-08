import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../shared/config';
import { IUsersPage } from '../../../models/usersPage.interface';
import { IUser } from 'src/app/models/user.interface';


@Injectable()
export class UsersListService {
  currentUser: IUser;

  constructor(
    private http: HttpClient
    ) {}

  getUsers(page): Observable<IUsersPage> {
    return this.http.get<IUsersPage>(`${API_URL}/users?page=${page}`)
      .pipe(catchError((error: any) => Observable.throw(error)))
  }

  // setCurrentUser(user) {
  //   this.currentUser = user;
  // }

  // getCurrentUser() {
  //   return this.currentUser;
  // }
}