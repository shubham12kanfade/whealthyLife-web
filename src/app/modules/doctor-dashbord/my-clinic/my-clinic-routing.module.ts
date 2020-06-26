import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyClinicComponent } from './my-clinic.component';
import { DisplayClinicComponent } from './display-clinic/display-clinic.component';
import { ClinicInformationComponent } from './clinic-information/clinic-information.component';


const routes: Routes = [

  
  { path: '', component: MyClinicComponent , children: [
    {path : '' , redirectTo:'Clinic_Information' },
    { path: 'display_Clinic', component: DisplayClinicComponent},
    { path: 'Clinic_Information' , component: ClinicInformationComponent  }
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyClinicRoutingModule { }
