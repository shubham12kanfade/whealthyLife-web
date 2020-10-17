import { DashbordHomeComponent } from './dashbord-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { DashbordHomeRoutingModule } from './dashbord-home-routing.module';


@NgModule({
  declarations: [DashbordHomeComponent],
  imports: [
    CommonModule,
    DashbordHomeRoutingModule,
    ChartsModule
  ]
})
export class DashbordHomeModule { }
