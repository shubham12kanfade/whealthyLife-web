import { AddLocationComponent } from './add-location/add-location.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyClinicComponent } from './my-clinic.component';
import { DisplayClinicComponent } from './display-clinic/display-clinic.component';
import { ClinicInformationComponent } from './clinic-information/clinic-information.component';
import { MembersClinicComponent } from './members-clinic/members-clinic.component';
import { ClinicDashboardComponent } from './clinic-dashboard/clinic-dashboard.component';


const routes: Routes = [


  { path: '', component: MyClinicComponent , children: [
    {path : '' , redirectTo:'dashboard' },
    { path: 'display_Clinic', component: DisplayClinicComponent},
    { path: 'AddClinic' , component: ClinicInformationComponent },
    { path: 'Members' , component: MembersClinicComponent  },
    { path : 'dashboard' , component: ClinicDashboardComponent},
    { path: 'Addlocation', component: AddLocationComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyClinicRoutingModule { }
