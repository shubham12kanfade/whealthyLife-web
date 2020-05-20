import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ClinicDetailsComponent } from './clinic-details/clinic-details.component';
import { ConnectClinicComponent } from './connect-clinic/connect-clinic.component';
import { EducationComponent } from './education/education.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentityProofComponent } from './identity-proof/identity-proof.component';
import { RegistrationProofComponent } from './registration-proof/registration-proof.component';
import { ClinicProofComponent } from './clinic-proof/clinic-proof.component';
import { ClinicLocationComponent } from './clinic-location/clinic-location.component';
import { ClinicTimingsComponent } from './clinic-timings/clinic-timings.component';
import { ConsultantDetailsComponent } from './consultant-details/consultant-details.component';


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
  {
    path:'Identity_proof',component:IdentityProofComponent
  },
  {
    path:'Registration_proof',component:RegistrationProofComponent
  },
  {
    path:'Clinic_proof',component:ClinicProofComponent
  },
  {
    path:'Clinic_location',component:ClinicLocationComponent
  },
  {
    path:'Clinic_timings',component: ClinicTimingsComponent
  },
  {
    path:'Consultant_details',component:ConsultantDetailsComponent
  },
  

  {
    path:'edit_profile',component:EditProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
