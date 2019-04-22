import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {EmpdetailsComponent} from './empdetails/empdetails.component';
import {Employeedetailsauthservice} from './empdetails/empdeatils_guard.service';
//import {EmployeeRoutingModule} from './empdetails/emp-routing.module'
//import {NewempComponent} from './empdetails/newemp/newemp.component';

const routes: Routes = [

  {
    path:'',component:HomeComponent,pathMatch:'full'
  },

  {
    path:'home',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },

 

  {
   path:'emp',component:EmpdetailsComponent,
    //loadChildren: './empdetails/employee.module#EmployeeModule'
    //,canActivate:[Employeedetailsauthservice]
  },

  {
    path:'pagenotfound',component:PagenotfoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
