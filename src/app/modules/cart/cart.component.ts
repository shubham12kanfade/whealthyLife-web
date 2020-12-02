import { PopHealthComponent } from './../booktests/pop-health/pop-health.component';
import { MedicineService } from './../../services/medicine.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddressPopupComponent } from './address-popup/address-popup.component';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {
  CartData: any;
  // saveRupee: Number;
  amount: any;
  offer: any;
  name: any;
  tile: any;
  mrp: any;
  saveAmount: number;
  quantity: any;
  LabId: any;
  packType: any;



  constructor(public dialog: MatDialog,
    private MedicineService:MedicineService,
    ) { }

  openDialog() {
  
  }


  ngOnInit() {


    this.getCartData();

  }


  getCartData(){
    this.MedicineService.getPackageInCart().then((resData)=>{
      this.CartData=resData.data.tests
      console.log("🚀 ~ file: cart.component.ts ~ line 37 ~ CartComponent ~ this.MedicineService.getPackageInCart ~ this.CartData", this.CartData);

      this.amount = this.CartData[0].ammount,
      this.offer = this.CartData[0].testId?.discountOffer,
      this.name = this.CartData[0].labId?.name,
      this.tile = this.CartData[0].testId?.testId?.title,
      this.mrp = this.CartData[0].testId?.mrp,
      this.quantity = this.CartData[0].quantity

      this.saveAmount = parseInt(this.mrp) * parseInt(this.offer) /100
    }).catch((err)=>{
    console.log("CartComponent -> ngOnInit -> err", err)
    });

  }

  removeAt(id){
      console.log("CartComponent -> removeAt -> id", id)
      this.MedicineService.DelePackageInCart(id).then((resData)=>{
      console.log("CartComponent -> removeAt -> resData", resData)
      this.ngOnInit()
  }).catch((err)=>{
    console.log("CartComponent -> removeAt -> err", err)

  })
  }

}
