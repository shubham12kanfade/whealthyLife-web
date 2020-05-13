import { AutomaticIDGenerationComponent } from './automatic-idgeneration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomaticIDGenerationRoutingModule } from './automatic-idgeneration-routing.module';


@NgModule({
  declarations: [AutomaticIDGenerationComponent],
  imports: [
    CommonModule,
    AutomaticIDGenerationRoutingModule
  ]
})
export class AutomaticIDGenerationModule { }
