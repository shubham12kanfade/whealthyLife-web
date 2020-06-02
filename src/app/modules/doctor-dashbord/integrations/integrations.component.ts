import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.scss']
})
export class IntegrationsComponent implements OnInit {

  active:String="drive";
constructor(public router: Router) { 
  console.log("DriveComponent -> constructor -> router",router.url)
  
}


  ngOnInit(): void {
  }
navigation(val){
  this.active=val;
  this.router.navigateByUrl('/Doctor/Integrations/'+val);
}
}
