import { ImportExportComponent } from './import-export.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportExportRoutingModule } from './import-export-routing.module';


@NgModule({
  declarations: [ImportExportComponent],
  imports: [
    CommonModule,
    ImportExportRoutingModule
  ]
})
export class ImportExportModule { }
