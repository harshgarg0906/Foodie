import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app-start/home/home.component';
import { FoodieModule } from './foodie/foodie.module';
import { UserManagement } from './user-managment/user-management.module';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'auth',loadChildren: './user-managment/user-management.module#UserManagement'},
  {path:'dashboard',loadChildren:'./foodie/foodie.module#FoodieModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
