import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: string;
  NAME: string;
  TYPE: string;
  STREANGTH: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: '', NAME: '', TYPE: '', STREANGTH: '' }
];

@Component({
  selector: 'app-add-procedure-modal',
  templateUrl: './add-procedure-modal.component.html',
  styleUrls: ['./add-procedure-modal.component.scss']
})
export class AddProcedureModalComponent implements OnInit {
  displayedColumns: string[] = ['position', 'NAME', 'TYPE', 'STREANGTH'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
    this.dataSource.paginator = this.paginator;
  }

}
