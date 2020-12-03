import { MainService } from 'src/app/services/main.service';
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
  message: any;
  selected: number=0;
  DicQuantity: any;
  x: any;
  y: number;
  MRPPrice: number;



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

      this.amount = this.CartData[0].ammount
      this.offer = this.CartData[0].testId?.discountOffer,
      this.name = this.CartData[0].labId?.name,
      this.tile = this.CartData[0].testId?.testId?.title,
      this.mrp = this.CartData[0].testId?.mrp,
      this.quantity = this.CartData[0].quantity
      this.x = this.CartData[0].quantity
      this.y = this.CartData[0].ammount
      }).catch((err)=>{
      console.log("CartComponent -> ngOnInit -> err", err)
      });


  }


  PlusCartValue(){
    const dataQua = {
      ammount: this.amount,
      quantity: this.quantity,
      id: this.CartData[0]._id
    }

    this.MedicineService.addQuantity(dataQua).then(QuaRes => {
      this.MedicineService.Check(QuaRes)
    }).catch((err)=>{
      console.log(err)
    })
  }

  MinusCartValue(){
    const dataQua = {
      ammount: -this.amount,
      quantity: -this.quantity,
      id: this.CartData[0]._id
    }
    this.MedicineService.addQuantity(dataQua).then(QuaRes => {
      this.MedicineService.Check(QuaRes)
    })
  }

  incrementchoc(){
   ++this.x
   this.PlusCartValue()
   this.y =  parseInt(this.amount) * parseInt(this.x)
   this.saveAmount = parseInt(this.mrp) * parseInt(this.offer) /100
   console.log("SaveAmount++++++++++",)
   this.MRPPrice = parseInt(this.mrp) * parseInt(this.quantity)
  }

  decrementchoc(){
    --this.x
    this.MinusCartValue()
    this.y =  parseInt(this.amount) * parseInt(this.x)
    this.saveAmount = parseInt(this.mrp) * parseInt(this.offer) /100
    this.MRPPrice = parseInt(this.mrp) * parseInt(this.quantity)
    if(this.x==0){
      this.MedicineService.DelePackageInCart(this.CartData[0]._id).then(resDaTA => {
      this.MedicineService.Check(resDaTA)
      this.ngOnInit()
      }).catch((err)=>{
        console.log("CartComponent -> removeAt -> err", err)

      })
    }
  }



  removeAt(id){
      console.log("CartComponent -> removeAt -> id", id)
      this.MedicineService.DelePackageInCart(id).then((resData)=>{
      console.log("CartComponent -> removeAt -> resData", resData)
      this.MedicineService.Check(resData)
      this.ngOnInit()
  }).catch((err)=>{
    console.log("CartComponent -> removeAt -> err", err)

  })
  }
  nextCart(val){
    this.selected=val
  }
  receiveMessage($event){
    this.message = $event

    this.selected=this.message
  }

}
