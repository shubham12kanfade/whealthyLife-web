import { ReceiptIdGenComponent } from './receipt-id-gen/receipt-id-gen.component';
import { InvoiceIdGenComponent } from './invoice-id-gen/invoice-id-gen.component';
import { PatientIdGenComponent } from './patient-id-gen/patient-id-gen.component';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-automatic-idgeneration',
  templateUrl: './automatic-idgeneration.component.html',
  styleUrls: ['./automatic-idgeneration.component.scss']
})
export class AutomaticIDGenerationComponent implements OnInit {


  show: boolean=false;

  showInvoice:boolean=false;

  showReceipt:boolean=false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  PatientID(){

    this.show=!this.show;
  }

  InvoiceID(){

    this.showInvoice=!this.showInvoice;
  }


  ReceiptID(){
    this.showReceipt=!this.showReceipt;
  }


  modalopen() {
    const dialogRef = this.dialog.open(PatientIdGenComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
    });
  }

  InvoiceModalOpen() {
    const dialogRef = this.dialog.open(InvoiceIdGenComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
    });
  }



  RecieptModalOpen() {
    const dialogRef = this.dialog.open(ReceiptIdGenComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
    });
  }

}
