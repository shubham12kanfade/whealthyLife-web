import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartingTemplatesRoutingModule } from './charting-templates-routing.module';
import { ChartingTemplatesComponent } from './charting-templates.component';


@NgModule({
  declarations: [ChartingTemplatesComponent],
  imports: [
    CommonModule,
    ChartingTemplatesRoutingModule
  ]
})
export class ChartingTemplatesModule { }
