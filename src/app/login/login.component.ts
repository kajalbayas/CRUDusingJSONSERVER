import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormArray, FormBuilder, FormControl, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router'
import{Authentication} from '../empdetails/authentication.service';

//import {Emp} from '../emp.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empform: FormGroup;
  
  authstatus:boolean=false;

  //username: string = "admin@123";
  //password: string = "45678";

 // issubmittedvalue = false;

  constructor(private formbuilder: FormBuilder,private router:Router,private authenticationService:Authentication) { }

  createform(): void {
    this.empform = this.formbuilder.group(
      {
        email_id: new FormControl('', [Validators.required, Validators.email]),
        userpassword: new FormControl('', [Validators.required])

      }
    )
  }


  authenticate(): void 
  {
  debugger;
      let ename = this.empform.get('email_id').value;
      let epwd = this.empform.get('userpassword').value;



      //this.issubmittedvalue = true;


     /* if (this.username === ename && this.password === epwd) 
      {
        alert("login Succssfully");
        this.router.navigateByUrl('/emp');
        //this.empform.reset();
       }
      else
      {
      //this.empform.reset();
       } */
       

       //this.authenticationService.authenticate('admin','45678').subscribe(
       this.authenticationService.authenticate(ename,epwd).subscribe(
        (status)=>
        {
          debugger;

          this.authstatus = status;
          console.log(this.authstatus);
          if(this.authstatus){
            this.router.navigate([this.authenticationService.getSuccessUrl()]);
          }else{
            this.router.navigate(['pagenotfound']);
          }
        }
      )
      

       
     }

  ngOnInit() {
    this.createform();
  }
}










