import { ProfileComponent } from "./profile.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { RegistrationComponent } from "./registration/registration.component";
import { EducationComponent } from "./education/education.component";
import { ConnectClinicComponent } from "./connect-clinic/connect-clinic.component";
import { ClinicDetailsComponent } from "./clinic-details/clinic-details.component";
import { IdentityProofComponent } from "./identity-proof/identity-proof.component";
import { RegistrationProofComponent } from "./registration-proof/registration-proof.component";
import { ClinicProofComponent } from "./clinic-proof/clinic-proof.component";
import { ClinicLocationComponent } from "./clinic-location/clinic-location.component";
import { ClinicTimingsComponent } from "./clinic-timings/clinic-timings.component";
import { ConsultantDetailsComponent } from "./consultant-details/consultant-details.component";
import { SharedModule } from "./../../../shared/shared.module";
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicAutocompleteComponent } from './dynamic-autocomplete/dynamic-autocomplete.component';

@NgModule({
  declarations: [
    ProfileComponent,
    RegistrationComponent,
    EducationComponent,
    ConnectClinicComponent,
    ClinicDetailsComponent,
    IdentityProofComponent,
    RegistrationProofComponent,
    ClinicProofComponent,
    ClinicLocationComponent,
    ClinicTimingsComponent,
    ConsultantDetailsComponent,
    EditProfileComponent,
    DynamicAutocompleteComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProfileModule { }
