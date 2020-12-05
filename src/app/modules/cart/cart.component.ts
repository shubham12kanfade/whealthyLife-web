import { MainService } from 'src/app/services/main.service';
import { PopHealthComponent } from './../booktests/pop-health/pop-health.component';
import { MedicineService } from './../../services/medicine.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {
  message: any;
  selected: number = 0;
  CartData: any;
  TestData: any;
  AllData: any[]=[];




  constructor(
    private MedicineService: MedicineService,
  ) {



   }

  openDialog() {

  }


  ngOnInit() {


    this.getCartData();

  }


  getCartData() {
    this.AllData=[]
    this.MedicineService.getPackageInCart().then((resData) => {
      const TestData1 = resData.data.tests
      TestData1.forEach(element => {
        const data = {
          amount: element.ammount,
          offer: element.testId?.discountOffer,
          name: element.labId?.name,
          title: element.testId?.testId?.title,
          mrp: element.testId?.mrp,
          totalMrp:parseInt(element.testId?.mrp)*parseInt(element.quantity),
          quantity: element.quantity,
          x: element.quantity,
          y: this.forCal(element.testId?.mrp,element.quantity)*parseInt(element.testId?.discountOffer)/100,
          cartID:element._id,
          type:element.type
        }
        console.log("🚀 ~ file: cart.component.ts ~ line 56 ~ CartComponent ~ this.MedicineService.getPackageInCart ~ data", data)
        this.AllData.push(data)
      });
    })
    console.log("🚀 ~ file: cart.component.ts ~ line 59 ~ CartComponent ~ this.MedicineService.getPackageInCart ~  this.AllData",  this.AllData)
    
  }


  forCal(val,val1){
return parseInt(val)*parseInt(val1)
  }
  

  mini(type,id,amount,qunt,i){
    console.log("🚀 ~ file: cart.component.ts ~ line 81 ~ CartComponent ~ add ~ id", id,this.AllData)
  
    const dataQua = {
      ammount: -amount,
      quantity: -1,
      id: id,
      
    }
    this.MedicineService.addQuantity(dataQua).then(QuaRes => {
     
      const data= this.AllData.filter((x)=>x.cartID==id)
      console.log("🚀 ~ file: cart.component.ts ~ line 91 ~ CartComponent ~ this.MedicineService.addQuantity ~ data", data)
   this.AllData[i].quantity=parseInt(this.AllData[i].quantity)- 1
  
  
   this.AllData[i].totalMrp=parseInt(this.AllData[i].mrp)*parseInt(this.AllData[i].quantity)
   this.AllData[i].y=parseInt(this.AllData[i].totalMrp)*parseInt(this.AllData[i].offer)/100
  
  
   //  =parseInt(this.AllData[i].quantity)+1
   console.log("🚀 ~ file: cart.component.ts ~ line 93 ~ CartComponent ~ this.MedicineService.addQuantity ~ this.AllData", this.AllData)
   
    })
  }
add(type,id,amount,qunt,i){
  console.log("🚀 ~ file: cart.component.ts ~ line 81 ~ CartComponent ~ add ~ id", id,this.AllData)

  const dataQua = {
    ammount: amount,
    quantity: 1,
    id: id,
    
  }
  this.MedicineService.addQuantity(dataQua).then(QuaRes => {
   
    const data= this.AllData.filter((x)=>x.cartID==id)
    console.log("🚀 ~ file: cart.component.ts ~ line 91 ~ CartComponent ~ this.MedicineService.addQuantity ~ data", data)
 this.AllData[i].quantity=parseInt(this.AllData[i].quantity)+1


 this.AllData[i].totalMrp=parseInt(this.AllData[i].mrp)*parseInt(this.AllData[i].quantity)
 this.AllData[i].y=parseInt(this.AllData[i].totalMrp)*parseInt(this.AllData[i].offer)/100


 //  =parseInt(this.AllData[i].quantity)+1
 console.log("🚀 ~ file: cart.component.ts ~ line 93 ~ CartComponent ~ this.MedicineService.addQuantity ~ this.AllData", this.AllData)
 
  })
}
  DataManage() {

  }

  nextCart(val) {
    this.selected = val
  }
  receiveMessage($event) {
    this.message = $event

    this.selected = this.message
  }

}
