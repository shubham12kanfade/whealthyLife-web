import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  NAME: string;
  TYPE: string;
  STREANGTH: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { NAME: 'Cash', TYPE: 'Cash', STREANGTH: 1},
  { NAME: 'Cash', TYPE: 'Cash', STREANGTH: 1},
  { NAME: 'Cheque',TYPE: 'Cash', STREANGTH: 1 },
  { NAME: 'Cash', TYPE: 'Cash', STREANGTH: 1},
  { NAME: 'Cash', TYPE: 'Cash', STREANGTH: 1},
  { NAME: 'Cash', TYPE: 'Cash', STREANGTH: 1},
  { NAME: 'Cash', TYPE: 'Cash', STREANGTH: 1},
  { NAME: 'Cash', TYPE: 'Cash', STREANGTH: 1},
  { NAME: 'Cash', TYPE: 'Cash', STREANGTH: 1},
  { NAME: 'Cheque',TYPE: 'Cash', STREANGTH: 1},
  { NAME: 'Cash',TYPE: 'Cash', STREANGTH: 1 },
  { NAME: 'Cash',TYPE: 'Cash', STREANGTH: 1},
  {NAME: 'Cash',TYPE: 'Cash', STREANGTH: 1 },
  { NAME: 'Cash',TYPE: 'Cash', STREANGTH: 1},
  { NAME: 'Cash',TYPE: 'Cash', STREANGTH: 1 },
  { NAME: 'Cash',TYPE: 'Cash', STREANGTH: 1 },
  { NAME: 'Cash',TYPE: 'Cash', STREANGTH: 1 },
  { NAME: 'Cash',TYPE: 'Cash', STREANGTH: 1},
  { NAME: 'Cash',TYPE: 'Cash', STREANGTH: 1},
  { NAME: 'Cash',TYPE: 'Cash', STREANGTH: 1 },
];


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  sark: boolean=true;
  second: boolean=false;
  doctor: boolean=false;
  staff:boolean=false;
  tax: boolean=false;
  pay: boolean=false;
  newg: boolean=false;
  opmod: boolean = false;
  inp: boolean = false;

  displayedColumns: string[] = ['NAME', 'TYPE', 'STREANGTH'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
    this.dataSource.paginator = this.paginator;
  }
  slideon() {
    this.sark = true;
    this.second = false;
  
  }
  secondon() {
    this.second = true;
    this.sark = false ;

  }
  shomodal1(){
    this.tax=!this.tax;
  }
  shomodal2(){
    this.pay=!this.pay;
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
