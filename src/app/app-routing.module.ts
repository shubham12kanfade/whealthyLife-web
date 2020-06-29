
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuardService } from './guard/role-guard.service';



const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/public/public.module').then(ud => ud.PublicModule) },
  { path: 'Doctor', loadChildren: () => import('./modules/doctor-dashbord/doctor-dashbord.module').then(dd => dd.DoctorDashbordModule), canActivate: [RoleGuardService] },
  { path: 'video-conference', loadChildren: () => import('./modules/video-conference/video-conference.module').then(video => video.VideoConferenceModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
