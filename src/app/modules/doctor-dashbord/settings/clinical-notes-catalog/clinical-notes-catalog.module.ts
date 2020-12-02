import { ClinicalNotesCatalogComponent } from './clinical-notes-catalog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicalNotesCatalogRoutingModule } from './clinical-notes-catalog-routing.module';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [ClinicalNotesCatalogComponent],
  imports: [
    CommonModule,
    ClinicalNotesCatalogRoutingModule,
    SharedModule
  ]
})
export class ClinicalNotesCatalogModule { }
