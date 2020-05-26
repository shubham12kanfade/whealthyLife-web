import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements OnInit {
  firstoption: String="free";
  expression:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  option(val){
  console.log("ConsultationsComponent -> option -> val", val)
    
    this.firstoption=val;
  }

}
