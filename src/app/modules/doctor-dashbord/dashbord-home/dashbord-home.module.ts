import { DashbordHomeComponent } from './dashbord-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordHomeRoutingModule } from './dashbord-home-routing.module';


@NgModule({
  declarations: [DashbordHomeComponent],
  imports: [
    CommonModule,
    DashbordHomeRoutingModule
  ]
})
export class DashbordHomeModule { }
