import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoConferenceComponent } from './video-conference.component';


const routes: Routes = [
  { path: '', component: VideoConferenceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoConferenceRoutingModule { }
