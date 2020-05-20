import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProcedureModalComponent } from './add-procedure-modal/add-procedure-modal.component';

@Component({
  selector: 'app-pricing-catalog',
  templateUrl: './pricing-catalog.component.html',
  styleUrls: ['./pricing-catalog.component.scss']
})
export class PricingCatalogComponent implements OnInit {
  opmod: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  modalopen() {
    const dialogRef = this.dialog.open(AddProcedureModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
