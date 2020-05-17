import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-catalog',
  templateUrl: './pricing-catalog.component.html',
  styleUrls: ['./pricing-catalog.component.scss']
})
export class PricingCatalogComponent implements OnInit {
  opmod: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
modalopen(){
  this.opmod=!this.opmod;
}
}
