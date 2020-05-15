import { DrugCatalogComponent } from './drug-catalog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrugCatalogRoutingModule } from './drug-catalog-routing.module';


@NgModule({
  declarations: [DrugCatalogComponent],
  imports: [
    CommonModule,
    DrugCatalogRoutingModule
  ]
})
export class DrugCatalogModule { }
