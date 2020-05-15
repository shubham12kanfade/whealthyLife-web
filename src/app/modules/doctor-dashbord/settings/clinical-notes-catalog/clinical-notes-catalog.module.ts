import { ClinicalNotesCatalogComponent } from './clinical-notes-catalog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicalNotesCatalogRoutingModule } from './clinical-notes-catalog-routing.module';


@NgModule({
  declarations: [ClinicalNotesCatalogComponent],
  imports: [
    CommonModule,
    ClinicalNotesCatalogRoutingModule
  ]
})
export class ClinicalNotesCatalogModule { }
