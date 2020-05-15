
import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  {path: '',loadChildren: () => import('./modules/public/public.module').then(ud => ud.PublicModule )},
  {path: 'Doctor',loadChildren: () => import('./modules/doctor-dashbord/doctor-dashbord.module').then(dd => dd.DoctorDashbordModule )},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
