import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  id1: number;
  productList: { id: number; avtar: string; name: string; price: number; discount: number;quantity:number }[];
  ProductData: { id: number; avtar: string; name: string; price: number; discount: number;quantity:number }[];
  quant: any;
  sub: number;
  quanty: number;

  constructor(public route : ActivatedRoute) {
    this.productList =[
      {
      id:0,
      avtar:"../../../assets/img/med1.jpg",
      name:"SHELCAL 500MG Tablet 15'S",
      price:76.50,
      discount: 0,
      quantity: 7
    },
    {
      id:1,
      avtar:"../../../assets/img/med2.jpeg",
      name:"BBBBBBBB 500MG Tablet 15'S",
      price:98.50,
      discount: 0,
      quantity: 2
    },
    {
      id:2,
      avtar:"../../../assets/img/med4.jpeg",
      name:"CCCCC 500MG Tablet 15'S",
      price:300,
      discount: 0,
      quantity: 2
    },
    {
      id:3,
      avtar:"../../../assets/img/med1.jpg",
      name:"DDDDDD 500MG Tablet 15'S",
      price:426.20,
      discount: 0,
      quantity: 2
    },
    {
      id:4,
      avtar:"../../../assets/img/med2.jpeg",
      name:"EEEEEEE 500MG Tablet 15'S",
      price:81.50,
      discount: 0,
      quantity: 2
    },
    {
      id:5,
      avtar:"../../../assets/img/med4.jpeg",
      name:"SHELCAL 500MG Tablet 15'S",
      price:84,
      discount: 0,
      quantity: 2
    }
  ]
   }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id1 = + params['id'];
          this.ProductData= this.productList.filter(x => x.id === this.id1);
          this.quant =   this.ProductData[0];
          this.quanty = this.quant.quantity;
          console.log("AddToCartComponent -> ngOnInit -> this.quanty ", this.quanty )
          // console.log("AddToCartComponent -> ngOnInit ->  this.quant",  this.quant)
          // console.log("AddToCartComponent -> ngOnInit -> this.ProductData", this.ProductData)
      }
    );
  }

  subtract(){
    this.sub = this.quanty-1;
    console.log("AddToCartComponent -> subtract -> this.sub", this.sub);
  }

  addition(){
    this.sub = this.quanty + 1;
    console.log("AddToCartComponent -> subtract -> this.sub", this.sub);
  }




}





