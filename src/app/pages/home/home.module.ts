import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
// import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from '../../app-routing.module';


import { UsersListService } from './users-list/users-list.service';

import { HomeComponent } from './home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsersListComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    // MatSortModule,
    AppRoutingModule
  ],
  providers: [
    UsersListService
  ],
  exports: [
    // MatSortModule,
    MatTableModule
  ]
})
export class HomeModule {}