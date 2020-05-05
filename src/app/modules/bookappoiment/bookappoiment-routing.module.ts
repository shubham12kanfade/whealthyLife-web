import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { ChatnowComponent } from './chatnow/chatnow.component';
import { BookappoimentComponent } from './bookappoiment.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [
  
  { path :'',component:BookappoimentComponent},
  {path :'aaaa',component:PatientDetailsComponent},
  
  { path: 'chatnow' , component:ChatnowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookappoimentRoutingModule { }
