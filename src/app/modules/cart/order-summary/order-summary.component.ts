import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  @Output() Eve = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
