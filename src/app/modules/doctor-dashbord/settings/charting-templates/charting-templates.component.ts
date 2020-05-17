import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charting-templates',
  templateUrl: './charting-templates.component.html',
  styleUrls: ['./charting-templates.component.scss']
})
export class ChartingTemplatesComponent implements OnInit {
  chart: boolean=false;
  pres: boolean=false;
  labord: boolean=false;
  folow: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
chartingtemplate(){
  this.chart=!this.chart;
}
prescriptionbtn(){
  this.pres=!this.pres;
}
laborderbtn(){
  this.labord=!this.labord;
}
followup(){
  this.folow=!this.folow;
}
}
