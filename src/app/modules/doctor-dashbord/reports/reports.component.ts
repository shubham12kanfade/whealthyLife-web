import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  durationsif: any;
  firstSelect: String = "Invoiced Income";
  selectTwo:boolean=false;      
  items: any=[ {id: 1,value:'Daily', name: 'Daily'},
  {id: 2,value:'Monthly', name: 'Monthly'},
  {id: 3,value:'Per Doctor', name: 'Per Doctor'},
  {id: 4,value:'Per Procedure', name: 'Per Procedure'},];
  filtertype: boolean=false;
  selectTwoValue:String="null";
  constructor() {
   
  }

  onOptionsSelected2(value) { 
    this.selectTwoValue=value;
    console.log("ReportsComponent -> value", value)
  }
  filter(val){
    this.filtertype=val;
  }
  onOptionsSelected(value) {
    this.firstSelect = value;
    this.selectTwo=true;
    if (this.firstSelect == "Invoiced Income") {
      this.selectTwo=false;   
       this.items = [
        {id: 1,value:'Daily', name: 'Daily'},
        {id: 2,value:'Monthly', name: 'Monthly'},
        {id: 3,value:'Per Doctor', name: 'Per Doctor'},
        {id: 4,value:'Per Procedure', name: 'Per Procedure'},
      ];
    } else if (this.firstSelect =="Payments") {
      this.selectTwoValue="All";
     
      this.selectTwo=false;   
      this.items = [
        {id: 1,value:'All', name: 'All'},
        {id: 2,value:'Mode Of Payments', name: 'Mode Of Payments'},
    
      ];

    } else if (this.firstSelect =="New Patients") {
      this.selectTwo=true;   
      this.items = [
        {id: 1,value:'none', name: 'none'},
      ];

    } else if (this.firstSelect =="Appointments") {
      this.selectTwo=true;   
      this.items = [
        {id: 1,value:'none', name: 'none'},
      ];

    } else if (this.firstSelect =="Communications") {
      this.selectTwoValue="Transactional SMS"
      this.selectTwo=false;   
      this.items = [
        {id: 1,value:'Transactional SMS', name: 'Transactional SMS'},
        {id: 2,value:'Promotional SMS', name: 'Promotional SMS'},
        {id: 3,value:'Transactional Email', name: 'Transactional Email'},
        {id: 4,value:'SMS Credit Usage', name: 'SMS Credit Usage'},
      ];

    } else if (this.firstSelect =="Billing Summary") {
      this.selectTwo=true;   
      this.items = [
        {id: 1,value:'none', name: 'none'},
      ];

    } else if (this.firstSelect =="Amount Due") {
      this.selectTwo=true;   
      this.items = [
        {id: 1,value:'none', name: 'none'},
      ];
    }


  }

  ngOnInit(): void {
  }

}
