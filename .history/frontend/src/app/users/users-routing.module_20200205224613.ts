import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [
 /*  {
    path: 'register',
    component: AllUsersComponent
  }, */
/*   {
    path: ':id',
    component: UserDetailComponent
  },
  {
    path: '',
    component: DashboardComponent
  }, */
  {
    path: '',
    component: RegisterComponent
  },
  // {
  //   path: 'login',
  //   component: UserLoginComponent
  // }
  ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
