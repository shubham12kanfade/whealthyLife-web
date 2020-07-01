import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {
  productList: { id: number; avtar: string; name: string; price: number; discount: number; }[];
  id1: number;
  ProductData: { id: number; avtar: string; name: string; price: number; discount: number; }[];

  constructor(private route: ActivatedRoute) {
    this.productList =[
      {
      id:0,
      avtar:"../../../assets/img/med1.jpg",
      name:"SHELCAL 500MG Tablet 15'S",
      price:76.50,
      discount: 0
    },
    {
      id:1,
      avtar:"../../../assets/img/med2.jpeg",
      name:"BBBBBBBB 500MG Tablet 15'S",
      price:98.50,
      discount: 0
    },
    {
      id:2,
      avtar:"../../../assets/img/med4.jpeg",
      name:"CCCCC 500MG Tablet 15'S",
      price:300,
      discount: 0
    },
    {
      id:3,
      avtar:"../../../assets/img/med1.jpg",
      name:"DDDDDD 500MG Tablet 15'S",
      price:426.20,
      discount: 0
    },
    {
      id:4,
      avtar:"../../../assets/img/med2.jpeg",
      name:"EEEEEEE 500MG Tablet 15'S",
      price:81.50,
      discount: 0
    },
    {
      id:5,
      avtar:"../../../assets/img/med4.jpeg",
      name:"SHELCAL 500MG Tablet 15'S",
      price:84,
      discount: 0
    }
  ]
   }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id1 = + params['id'];
            this.ProductData= this.productList.filter(x => x.id === this.id1);
            console.log("DetailsProductComponent -> ngOnInit -> this.ProductData", this.ProductData)
        }
      );
    

  }

}
