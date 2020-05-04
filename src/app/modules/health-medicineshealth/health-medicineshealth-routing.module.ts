import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthMedicineshealthComponent } from './health-medicineshealth.component';


const routes: Routes = [
  { path :'',component:HealthMedicineshealthComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthMedicineshealthRoutingModule { }
