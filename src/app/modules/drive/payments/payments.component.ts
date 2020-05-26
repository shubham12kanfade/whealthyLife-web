import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  firstoption:String="PaymentOptions";
  constructor() { }

  ngOnInit(): void {
  }

  option(val){
    this.firstoption=val;
  console.log("PaymentsComponent -> option -> val", val)

  }
}
