import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddressPopupComponent } from './address-popup/address-popup.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {



  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AddressPopupComponent);
  }

  ngOnInit(): void {
  }

}
