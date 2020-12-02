import { SharedModule } from './../../../../shared/shared.module';
import { ImportExportComponent } from './import-export.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportExportRoutingModule } from './import-export-routing.module';
import { RequestImportExportComponent } from './request-import-export/request-import-export.component';


@NgModule({
  declarations: [ImportExportComponent, RequestImportExportComponent],
  imports: [
    CommonModule,
    ImportExportRoutingModule,
    SharedModule
  ]
})
export class ImportExportModule { }
