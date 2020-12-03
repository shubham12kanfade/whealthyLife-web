import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paument-cart',
  templateUrl: './paument-cart.component.html',
  styleUrls: ['./paument-cart.component.scss']
})
export class PaumentCartComponent implements OnInit {
  @Output() Eve = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
