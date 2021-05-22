import { Component, OnInit } from '@angular/core';
import {NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';



@Component({
  selector: 'app-composemail',
  templateUrl: './composemail.component.html',
  styleUrls: ['./composemail.component.css']
})
export class ComposemailComponent implements OnInit {
  email='';
  subject='';
  
    emaillist:any = [];
 form:any;

  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) {



     this.form=new FormGroup(
       {
         email:new FormControl("",Validators.required),
         subject: new FormControl("",Validators.required)
       
       });
       
     }
  ngOnInit(): void {
     
  }
  addData(){
    let emailObj:any = {
      data:this.form.value,
     
    };
    console.log(emailObj);
     this.emaillist.push(emailObj);
   console.log(this.emaillist);
  
  }
  
  savemail()
   {
     
    this.addData();
   

  //  this.router.navigate(['./sendmail'],{
    
   
  //   })
   }
 
}
