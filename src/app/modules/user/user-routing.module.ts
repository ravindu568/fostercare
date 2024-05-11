import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserHomeComponent} from "./component/user-home/user-home.component";
import {UserDryfoodComponent} from "./component/user-dryfood/user-dryfood.component";
import {UserFreshffoodComponent} from "./component/user-freshffood/user-freshffood.component";
import {UserMeatLockerComponent} from "./component/user-meat-locker/user-meat-locker.component";

const routes: Routes = [
  {path:'',redirectTo:'/user/process/home',pathMatch:'full'},
  {path:'process',loadComponent:()=>import('./component/user-context/user-context.component').then(c=>c.UserContextComponent),
  children:[
    {path:'home',component:UserHomeComponent},
    {path:'dry-food',component:UserDryfoodComponent},
    {path:'fresh-food',component:UserFreshffoodComponent},
    {path:'meat-locker',component:UserMeatLockerComponent}


  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
