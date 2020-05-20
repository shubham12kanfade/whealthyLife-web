import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoConferenceRoutingModule } from './video-conference-routing.module';
import { VideoConferenceComponent } from './video-conference.component';

@NgModule({
  declarations: [
    VideoConferenceComponent
  ],
  imports: [
    CommonModule,
    VideoConferenceRoutingModule,
  ]
})
export class VideoConferenceModule { }
