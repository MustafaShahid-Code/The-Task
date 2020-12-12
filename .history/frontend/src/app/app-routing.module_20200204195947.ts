import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [

  { path: '/', component: HomeComponent  },
  { path: '/about', component: AboutComponent },
  { path: '/', component: HomeComponent },

  {
    path: '',
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