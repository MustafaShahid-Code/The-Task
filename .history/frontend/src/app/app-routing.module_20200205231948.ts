import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersModule } from './users/users.module';


const routes: Routes = [

   { path: './', component: HomeComponent  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'register', component: RegisterComponent },
  {
    path: '',
    loadChildren: () =>
      import('./users/users.module').then(m => m.UsersModule)
  },
 /*  {
    path: 'users/dashboard',
    redirectTo: '',
    pathMatch: 'full'
  },
 {
   path: 'users',
   loadChildren: () =>
   import(./users/users.module').then(m => m.UsersModule)
 },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then(m => m.UsersModule)
  } */
 /*  {
    path: "",
    redirectTo: "books",
    pathMatch: "full"
  },
  {
    path: "books",
    loadChildren: () =>
      import("./books-module/books-module.module").then(m => m.BooksModuleModule)
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
