import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SamplePickupComponent } from './sample-pickup/sample-pickup.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { DoctorConsulationComponent } from './doctor-consulation/doctor-consulation.component';
import { PricesGuarantedComponent } from './prices-guaranted/prices-guaranted.component';
@NgModule({
  declarations: [HomeComponent, SamplePickupComponent, ViewReportComponent, DoctorConsulationComponent, PricesGuarantedComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CarouselModule,
  ]
})
export class HomeModule {

}
