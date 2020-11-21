import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ISOComponent } from './iso/iso.component';
import { NABLComponent } from './nabl/nabl.component';

@Component({
  selector: 'app-pop-health',
  templateUrl: './pop-health.component.html',
  styleUrls: ['./pop-health.component.scss']
})
export class PopHealthComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ISOComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2() {
    const dialogRef = this.dialog.open(NABLComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
