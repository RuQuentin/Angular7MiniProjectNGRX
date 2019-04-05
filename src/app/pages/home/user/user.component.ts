import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/user.interface';
import { UsersListService } from '../users-list/users-list.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{
  currentUser: IUser;
  
  constructor(
    private usersListService: UsersListService
    ) {}

  ngDoCheck() {
    this.currentUser = this.usersListService.getCurrentUser();
  }
}