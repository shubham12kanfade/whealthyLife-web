import { PricingCatalogComponent } from './pricing-catalog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingCatalogRoutingModule } from './pricing-catalog-routing.module';


@NgModule({
  declarations: [PricingCatalogComponent],
  imports: [
    CommonModule,
    PricingCatalogRoutingModule
  ]
})
export class PricingCatalogModule { }
