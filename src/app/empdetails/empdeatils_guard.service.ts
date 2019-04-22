import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import { Authentication } from './authentication.service';



@Injectable()
export class Employeedetailsauthservice implements CanActivate
{

 constructor(private router:Router,private authenticationService:Authentication)
 {

 }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>
    {
        debugger;

       console.log("Inside Guard");

       if(this.authenticationService.getAuthStatus() === false)
       {
           debugger;
        this.router.navigate(['pagenotfound']);
        return of(false);    
    }   
    return of(true);    
    }



}
