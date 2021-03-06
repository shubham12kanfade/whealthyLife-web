import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyClinicRoutingModule } from './my-clinic-routing.module';
import { MyClinicComponent } from './my-clinic.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { DisplayClinicComponent } from './display-clinic/display-clinic.component';
import { ClinicInformationComponent } from './clinic-information/clinic-information.component';
import { MembersClinicComponent } from './members-clinic/members-clinic.component';
import { TableModule } from 'primeng/table';
import { ClinicDashboardComponent } from './clinic-dashboard/clinic-dashboard.component';
import { AddLocationComponent } from './add-location/add-location.component';


@NgModule({
  declarations: [ MyClinicComponent, DisplayClinicComponent, ClinicInformationComponent, MembersClinicComponent, ClinicDashboardComponent, AddLocationComponent ],
  imports: [
    CommonModule,
    MyClinicRoutingModule,
    SharedModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule
  ]
})
export class MyClinicModule { }
