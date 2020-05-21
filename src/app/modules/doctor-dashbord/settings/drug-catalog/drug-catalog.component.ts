import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  NAME: string;
  TYPE: number;
  STREANGTH: number;
  INSTRUCTIONS: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, NAME: 'Hydrogen', TYPE: 1.0079, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 2, NAME: 'Helium', TYPE: 4.0026, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 3, NAME: 'Lithium', TYPE: 6.941, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 4, NAME: 'Beryllium', TYPE: 9.0122, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 5, NAME: 'Boron', TYPE: 10.811, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 6, NAME: 'Carbon', TYPE: 12.0107, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 7, NAME: 'Nitrogen', TYPE: 14.0067, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 8, NAME: 'Oxygen', TYPE: 15.9994, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 9, NAME: 'Fluorine', TYPE: 18.9984, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 10, NAME: 'Neon', TYPE: 20.1797, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 11, NAME: 'Sodium', TYPE: 22.9897, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 12, NAME: 'Magnesium', TYPE: 24.305, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 13, NAME: 'Aluminum', TYPE: 26.9815, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 14, NAME: 'Silicon', TYPE: 28.0855, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 15, NAME: 'Phosphorus', TYPE: 30.9738, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 16, NAME: 'Sulfur', TYPE: 32.065, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 17, NAME: 'Chlorine', TYPE: 35.453, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 18, NAME: 'Argon', TYPE: 39.948, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 19, NAME: 'Potassium', TYPE: 39.0983, STREANGTH: 1, INSTRUCTIONS: 'one' },
  { position: 20, NAME: 'Calcium', TYPE: 40.078, STREANGTH: 1, INSTRUCTIONS: 'one' },
];


@Component({
  selector: 'app-drug-catalog',
  templateUrl: './drug-catalog.component.html',
  styleUrls: ['./drug-catalog.component.scss']
})
export class DrugCatalogComponent implements OnInit {
  // items=10;
  opmod: boolean = false;
  inp: boolean = false;

  displayedColumns: string[] = ['position', 'NAME', 'TYPE', 'STREANGTH', 'INSTRUCTIONS'];
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
}
