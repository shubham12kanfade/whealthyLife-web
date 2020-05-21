import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  NAME: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { NAME: 'No added yet'},
];


@Component({
  selector: 'app-clinical-notes-catalog',
  templateUrl: './clinical-notes-catalog.component.html',
  styleUrls: ['./clinical-notes-catalog.component.scss']
})
export class ClinicalNotesCatalogComponent implements OnInit {
  first: boolean=true;
  second: boolean=false;
  third:boolean=false;
  fourth:boolean=false;


  displayedColumns: string[] = ['NAME'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
    this.dataSource.paginator = this.paginator;
  }
  firstbtn() {
    this.first = true;
    this.second = false;
    this.third = false;
    this.fourth = false;
    
  
  }
  secondbtn() {
    this.second = true;
    this.first = false ;
    this.third = false;
    this.fourth = false;

  }
  thirdbtn() {
    this.third = true;
    this.first = false;
    this.second = false;
    this.fourth = false;
  }
  fourthbtn() {
    this.fourth = true;
    this.first = false;
    this.second = false;
    this.third = false;
  }
}
