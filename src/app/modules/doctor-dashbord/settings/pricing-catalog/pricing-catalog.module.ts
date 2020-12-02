import { PricingCatalogComponent } from './pricing-catalog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingCatalogRoutingModule } from './pricing-catalog-routing.module';
import { AddProcedureModalComponent } from './add-procedure-modal/add-procedure-modal.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [PricingCatalogComponent, AddProcedureModalComponent],
  imports: [
    CommonModule,
    PricingCatalogRoutingModule,
    SharedModule
  ]
})
export class PricingCatalogModule { }
