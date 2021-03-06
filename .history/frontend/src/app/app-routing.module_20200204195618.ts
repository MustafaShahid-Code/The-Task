import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
   { path: '/', component:HomeComponent},
    redirectTo: 'users',
    pathMatch: 'full'
  }
/*  {
   path: 'users',
   loadChildren: () =>
   import('./users/users.module').then(m => m.UsersModule)
 },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then(m => m.UsersModule)
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
