import { ClinicDetailsComponent } from './clinic-details/clinic-details.component';
import { ConnectClinicComponent } from './connect-clinic/connect-clinic.component';
import { EducationComponent } from './education/education.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',component:ProfileComponent
  },
  {
    path:'Registration',component:RegistrationComponent
  },
  {
    path:'Education',component:EducationComponent
  },
  {
    path:'Connect_clinic',component:ConnectClinicComponent
  },
  {
    path:'Clinic_details',component:ClinicDetailsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
