import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule}  from '@angular/forms'
import { UserManagementRoutingModule } from './user-management-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
   
    declarations:[
        LoginComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        UserManagementRoutingModule,
        MaterialModule,
        SharedModule,
        FlexLayoutModule
    ],
    exports:[],
    providers:[]
})

export class UserManagement{

}