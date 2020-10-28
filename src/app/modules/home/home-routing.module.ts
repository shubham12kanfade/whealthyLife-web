import { PricesGuarantedComponent } from './prices-guaranted/prices-guaranted.component';
import { DoctorConsulationComponent } from './doctor-consulation/doctor-consulation.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { SamplePickupComponent } from './sample-pickup/sample-pickup.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', component:HomeComponent },
  {path:'SamplePickup', component:SamplePickupComponent},
  {path:'ViewReport', component:ViewReportComponent},
  {path:'DoctorConsulation', component:DoctorConsulationComponent},
  {path:'PricesGuaranted', component:PricesGuarantedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
