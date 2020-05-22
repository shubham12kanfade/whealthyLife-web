import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  NAME: string;
  TYPE: string;
  STREANGTH: string;
  INSTRUCTIONS: string;
  position: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { NAME: 'Appointment', TYPE: 'confirmation', STREANGTH: '', INSTRUCTIONS: '' , position:'Customise'},
  { NAME: '', TYPE: 'cancellation', STREANGTH: '', INSTRUCTIONS: '', position:'' },
  { NAME: '', TYPE: 'Reminder(day of appt. at 7.30am).', STREANGTH: '', INSTRUCTIONS: '', position:'' },
  { NAME: 'Preventive Follow-up', TYPE: 'Reminder Follow up 6 months after the last appointment.', STREANGTH: '', INSTRUCTIONS: '', position:'Customise' },
  { NAME: 'Payment', TYPE: 'Payment', STREANGTH: '', INSTRUCTIONS: '', position:'Customise' },
  { NAME: 'Wishes', TYPE: 'Anniversary', STREANGTH: '', INSTRUCTIONS: '', position:'Customise' },
  { NAME: '', TYPE: 'Birthday', STREANGTH: '', INSTRUCTIONS: '', position:'' },
];



@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.scss']
})
export class CommunicationsComponent implements OnInit {
  displayedColumns: string[] = ['NAME', 'TYPE', 'STREANGTH', 'INSTRUCTIONS','position'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
    this.dataSource.paginator = this.paginator;
  }

}
