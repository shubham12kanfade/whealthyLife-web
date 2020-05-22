import { DrugCatalogComponent } from './drug-catalog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrugCatalogRoutingModule } from './drug-catalog-routing.module';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [DrugCatalogComponent],
  imports: [
    CommonModule,
    DrugCatalogRoutingModule,
    SharedModule
  ]
})
export class DrugCatalogModule { }
