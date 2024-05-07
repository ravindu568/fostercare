import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',loadComponent:()=>import('./components/login/login.component').then(c=>c.LoginComponent),pathMatch:'full'},
  {path:'signup',loadComponent:()=>import('./components/signup/signup.component').then(c=>c.SignupComponent),pathMatch:'full'},
  {path:'user',loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule)},
  {path:'admin',loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)},
  {path:'**',loadComponent:()=>import('./components/notfound-page/notfound-page.component').then(c=>c.NotfoundPageComponent),pathMatch:'full'}

];

