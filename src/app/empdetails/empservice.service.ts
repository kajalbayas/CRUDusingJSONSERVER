import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Http,Response } from '@angular/http';
import{Emp} from './emp.model';
import 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpserviceService 
{

  //employees:string;
  private Appurl :string="http://localhost:3000/employee";

 constructor(private httpclient:HttpClient,private http:Http) 
 {}

 getemployeedetailsbyid(id:number):Observable<any>
 {
   debugger;
   return this.httpclient.get<any>(this.Appurl+'/'+id);
 }

detailemp():Observable<any>
{
  //this.employees="employees";
  return this.httpclient.get<any>(this.Appurl);
}

/*updateempdetails(emp:Emp):Observable<any>{
  return this.http.put(this.Appurl+"/"+emp.id,emp);
}*/


updateempdetails(emp:Emp):Observable<any>
{
  return this.httpclient.put<Emp>(this.Appurl+'/'+emp.id,emp);
}


deletProductById(id:number):Observable<any>{
  return this.httpclient.delete<any>(this.Appurl+"/"+id);
}

saveallemp(emp:Emp):Observable<any>
{
  return this.httpclient.post<any>(this.Appurl,emp);
}

extractResponse(response:Response):any{
  let body = response.json();
  return body;
}

}
