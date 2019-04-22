

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {EmpdetailsComponent} from './empdetails.component';
import {NewempComponent} from './newemp/newemp.component';
import {EmployeeRoutingModule} from './emp-routing.module';
import { EmpmainComponent } from './empmain/empmain.component';


@NgModule({
   
    declarations: 
    [
        EmpdetailsComponent,
        NewempComponent,
        EmpmainComponent
       
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EmployeeRoutingModule
    ],
    providers: []
})

export class EmployeeModule{
}