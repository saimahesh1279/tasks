import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {
 
   details:any=[]
  

  constructor(
    private router:Router,
     private route:ActivatedRoute
  ){

  }

  ngOnInit(): void {
 this.route.queryParams.subscribe((params)=>{
this.details=JSON.parse(params.datakey);
 

  })
   }

}
