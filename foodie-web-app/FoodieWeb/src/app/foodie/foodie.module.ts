import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotellistComponent } from './hotellist/hotellist.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { FoodieRoutingModule } from './foodie-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HotellistComponent, SearchbarComponent, DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    FoodieRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class FoodieModule { }
