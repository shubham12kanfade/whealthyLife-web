import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPracticeModelComponent } from './add-practice-model/add-practice-model.component'
import { AddDoctorModelComponent } from './add-doctor-model/add-doctor-model.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: string;
  NAME: string;
  TYPE: string;
  STREANGTH: number;
  INSTRUCTIONS: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Airi Satou', NAME: 'Accountant', TYPE: 'Tokyo', STREANGTH: 33, INSTRUCTIONS: 'edit' },
];
@Component({
  selector: 'app-practice-staff',
  templateUrl: './practice-staff.component.html',
  styleUrls: ['./practice-staff.component.scss']
})
export class PracticeStaffComponent implements OnInit {
  sark: boolean = true;
  second: boolean = false;
  doctor: boolean = false;
  staff: boolean = false;
  displayedColumns: string[] = ['position', 'NAME', 'TYPE', 'STREANGTH', 'INSTRUCTIONS'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

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
    this.sark = false;
  }

  adddoctorpopup() {
    this.doctor = !this.doctor;
  }

  addstaffpopup() {
    this.staff = !this.staff;
  }

  addPractice() {
    const dialogRef = this.dialog.open(AddPracticeModelComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addDoctor() {
    const dialogRef = this.dialog.open(AddDoctorModelComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
