import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {Emp} from '../emp.model';
import {EmpserviceService}  from '../empservice.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-newemp',
  templateUrl: './newemp.component.html',
  styleUrls: ['./newemp.component.css']
})
export class NewempComponent implements OnInit 
{

  selectedemp:Emp=new Emp();
 
  empid:any=0;

  
 constructor(private activatedroute:ActivatedRoute,private router:Router,private empserivce:EmpserviceService)
 {

 }


ngOnInit()
{
  
debugger;
this.activatedroute.params.subscribe((params) => 
  {
    this.empid=params.id;
    console.log(this.empid);
  })

  this.activatedroute.paramMap.subscribe(
    (paramMap)=>
    {
      debugger;
      this.empid = parseInt(paramMap.get('id'));
      console.log(this.empid);
      this.empserivce.getemployeedetailsbyid(this.empid).subscribe(
       (emp:Emp)=>
       {
         debugger;
        console.log(emp);
        this.selectedemp = emp;
      }
      )
    }
  )

}



}






