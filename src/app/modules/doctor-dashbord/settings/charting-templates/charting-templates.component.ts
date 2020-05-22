import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  NAME: string;
  TYPE: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, NAME: 'Hydrogen', TYPE: 1.0079},
  { position: 2, NAME: 'Helium', TYPE: 4.0026},
  { position: 3, NAME: 'Lithium', TYPE: 6.941 },
  { position: 4, NAME: 'Beryllium', TYPE: 9.0122},
  { position: 5, NAME: 'Boron', TYPE: 10.811},
  { position: 6, NAME: 'Carbon', TYPE: 12.0107},
  { position: 7, NAME: 'Nitrogen', TYPE: 14.0067},
  { position: 8, NAME: 'Oxygen', TYPE: 15.9994 },
  { position: 9, NAME: 'Fluorine', TYPE: 18.998},
  { position: 10, NAME: 'Neon', TYPE: 20.1797},
  { position: 11, NAME: 'Sodium', TYPE: 22.9897},
  { position: 12, NAME: 'Magnesium', TYPE: 24.305},
  { position: 13, NAME: 'Aluminum', TYPE: 26.9815},
  { position: 14, NAME: 'Silicon', TYPE: 28.0855},
  { position: 15, NAME: 'Phosphorus', TYPE: 30.9738},
  { position: 16, NAME: 'Sulfur', TYPE: 32.065},
  { position: 17, NAME: 'Chlorine', TYPE: 35.453},
  { position: 18, NAME: 'Argon', TYPE: 39.948},
  { position: 19, NAME: 'Potassium', TYPE: 39.0983 },
  { position: 20, NAME: 'Calcium', TYPE: 40.078},

];


@Component({
  selector: 'app-charting-templates',
  templateUrl: './charting-templates.component.html',
  styleUrls: ['./charting-templates.component.scss']
})
export class ChartingTemplatesComponent implements OnInit {
  opmod: boolean = false;
  inp: boolean = false;
  chart: boolean = false;
  pres: boolean = false;
  labord: boolean = false;
  folow: boolean = false;


  displayedColumns: string[] = ['position', 'NAME', 'TYPE'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
    this.dataSource.paginator = this.paginator;
  }
  modalopen() {
    this.opmod = !this.opmod;
  }
  inpfield() {
    this.inp = !this.inp;
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
