import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  TYPE: number;
  STREANGTH: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, TYPE: 1.0079, STREANGTH: 1},
  { position: 2, TYPE: 4.0026, STREANGTH: 1},
  { position: 3, TYPE: 6.941, STREANGTH: 1 },
  { position: 4, TYPE: 9.0122, STREANGTH: 1},
  { position: 5, TYPE: 10.811, STREANGTH: 1},
  { position: 6, TYPE: 12.0107, STREANGTH: 1},
  { position: 7, TYPE: 14.0067, STREANGTH: 1},
  { position: 8, TYPE: 15.9994, STREANGTH: 1},
  { position: 9, TYPE: 18.9984, STREANGTH: 1},
  { position: 10,TYPE: 20.1797, STREANGTH: 1},
  { position: 11,TYPE: 22.9897, STREANGTH: 1 },
  { position: 12,TYPE: 24.305, STREANGTH: 1},
  { position: 13,TYPE: 26.9815, STREANGTH: 1 },
  { position: 14,TYPE: 28.0855, STREANGTH: 1},
  { position: 15,TYPE: 30.9738, STREANGTH: 1 },
  { position: 16,TYPE: 32.065, STREANGTH: 1 },
  { position: 17,TYPE: 35.453, STREANGTH: 1 },
  { position: 18,TYPE: 39.948, STREANGTH: 1},
  { position: 19,TYPE: 39.0983, STREANGTH: 1},
  { position: 20,TYPE: 40.078, STREANGTH: 1 },
];


@Component({
  selector: 'app-patient-groups',
  templateUrl: './patient-groups.component.html',
  styleUrls: ['./patient-groups.component.scss']
})
export class PatientGroupsComponent implements OnInit {
  newg: boolean=false;
  opmod: boolean = false;
  inp: boolean = false;

  displayedColumns: string[] = ['position', 'TYPE', 'STREANGTH'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
    this.dataSource.paginator = this.paginator;
  }
  shomodalp(){
    this.newg=!this.newg;
  }
  modalopen() {
    this.opmod = !this.opmod;
  }
  inpfield() {
    this.inp = !this.inp;
  }
}
