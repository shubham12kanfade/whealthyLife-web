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
  { position: 'This doctor', NAME: '', TYPE: '', STREANGTH: '' },
  { position: 'Daily Schedule', NAME: '', TYPE: '', STREANGTH: '' },
  { position: 'Appointments Confirmation', NAME: '', TYPE: '', STREANGTH: '' },
  { position: 'All doctors', NAME: '', TYPE: '', STREANGTH: '' },

];


@Component({
  selector: 'app-add-practice-model',
  templateUrl: './add-practice-model.component.html',
  styleUrls: ['./add-practice-model.component.scss']
})
export class AddPracticeModelComponent implements OnInit {
  displayedColumns: string[] = ['position', 'NAME', 'TYPE', 'STREANGTH'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
    this.dataSource.paginator = this.paginator;
  }


}
