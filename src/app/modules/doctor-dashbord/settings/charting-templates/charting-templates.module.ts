import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartingTemplatesRoutingModule } from './charting-templates-routing.module';
import { ChartingTemplatesComponent } from './charting-templates.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [ChartingTemplatesComponent],
  imports: [
    CommonModule,
    ChartingTemplatesRoutingModule,
    SharedModule
  ]
})
export class ChartingTemplatesModule { }
