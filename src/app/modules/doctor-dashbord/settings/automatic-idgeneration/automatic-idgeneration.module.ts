import { SharedModule } from './../../../../shared/shared.module';
import { AutomaticIDGenerationComponent } from './automatic-idgeneration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomaticIDGenerationRoutingModule } from './automatic-idgeneration-routing.module';
import { PatientIdGenComponent } from './patient-id-gen/patient-id-gen.component';
import { InvoiceIdGenComponent } from './invoice-id-gen/invoice-id-gen.component';
import { ReceiptIdGenComponent } from './receipt-id-gen/receipt-id-gen.component';


@NgModule({
  declarations: [AutomaticIDGenerationComponent, PatientIdGenComponent, InvoiceIdGenComponent, ReceiptIdGenComponent],
  imports: [
    CommonModule,
    AutomaticIDGenerationRoutingModule,
    SharedModule
  ]
})
export class AutomaticIDGenerationModule { }
