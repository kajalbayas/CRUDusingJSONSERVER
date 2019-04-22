

import {RouterModule,Routes} from '@angular/router';
import {NgModule, Component} from '@angular/core';
import{NewempComponent} from './newemp/newemp.component';
import{EmpdetailsComponent} from './empdetails.component';
import{EmpmainComponent} from './empmain/empmain.component';

const routes:Routes=[
    {
       path:'',component:EmpmainComponent
    },
    
    {
     path:'emp',component:EmpdetailsComponent,
     children:
     [
         {
          
            path:"newemp/:id", component:NewempComponent
             
          }
     
     ]

    },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports :[RouterModule]
})


export class EmployeeRoutingModule{
    constructor(){
      console.log("Employee Routing Module Loaded...");
    }
}