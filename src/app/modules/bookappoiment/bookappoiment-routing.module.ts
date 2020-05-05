import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { BookappoimentComponent } from './bookappoiment.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path :'',component:BookappoimentComponent},
  {path :'aaaa',component:PatientDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookappoimentRoutingModule { }
