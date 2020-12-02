import { ReachComponent } from './reach.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReachRoutingModule } from './reach-routing.module';


@NgModule({
  declarations: [ReachComponent],
  imports: [
    CommonModule,
    ReachRoutingModule
  ]
})
export class ReachModule { }
