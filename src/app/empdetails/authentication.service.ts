import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';

@Injectable()
export class Authentication
{

    successUrl : string = 'emp';

    isAuthenticated :boolean=false;
 
    constructor(){}

    authenticate(userName:string,password:string):Observable<boolean>
    {
        debugger;

        if(userName !== 'admin' && password !== '45678')
        {
            this.isAuthenticated = false;
           
        }
        else
        {
            this.isAuthenticated = true;
        }
        return of(this.isAuthenticated);

    }


    getAuthStatus():boolean{
        return this.isAuthenticated;
    }


    setSuccessUrl(successUrl:string){
        this.successUrl = successUrl;
    }
    getSuccessUrl():string{
        return this.successUrl;
    }

}