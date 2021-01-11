import { DashbordHomeComponent } from './dashbord-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { DashbordHomeRoutingModule } from './dashbord-home-routing.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [DashbordHomeComponent],
  imports: [
    CommonModule,
    DashbordHomeRoutingModule,
    ChartsModule,
    MatSlideToggleModule
  ]
})
export class DashbordHomeModule { }
