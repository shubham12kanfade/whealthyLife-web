import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {



  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

}
