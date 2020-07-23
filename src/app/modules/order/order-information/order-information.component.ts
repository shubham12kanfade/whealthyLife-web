import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.scss']
})
export class OrderInformationComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion
  panelOpenState = false;
  productList: { id: number; avtar: string; name: string; price: number; discount: number; }[];
  id: any;
 
  
  

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }






  constructor(private activatedRoute: ActivatedRoute){ 
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




  


  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId;
  });
  console.log(this.id);}

}
