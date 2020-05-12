import { HealthFeedComponent } from './health-feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthFeedRoutingModule } from './health-feed-routing.module';


@NgModule({
  declarations: [HealthFeedComponent],
  imports: [
    CommonModule,
    HealthFeedRoutingModule
  ]
})
export class HealthFeedModule { }
