import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [AllUsersComponent, UserDetailComponent, AddUserComponent, DashboardComponent, RegisterComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
