import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [

  { path: './', component: HomeComponent  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  {
    path: 'dashboard/users',
    redirectTo: 'users',
    pathMatch: 'full'
  },
 {
   path: 'users',
   loadChildren: () =>
   import('./users/users.module').then(m => m.UsersModule)
 },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
