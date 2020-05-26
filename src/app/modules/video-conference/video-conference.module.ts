import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoConferenceRoutingModule } from './video-conference-routing.module';
import { VideoConferenceComponent } from './video-conference.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    VideoConferenceComponent
  ],
  imports: [
    CommonModule,
    VideoConferenceRoutingModule,
    SharedModule
  ]
})
export class VideoConferenceModule { }
