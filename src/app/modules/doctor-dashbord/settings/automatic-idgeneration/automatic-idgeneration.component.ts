import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automatic-idgeneration',
  templateUrl: './automatic-idgeneration.component.html',
  styleUrls: ['./automatic-idgeneration.component.scss']
})
export class AutomaticIDGenerationComponent implements OnInit {


  show: boolean=false;

  showInvoice:boolean=false;

  showReceipt:boolean=false;

  constructor() { }

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

}
