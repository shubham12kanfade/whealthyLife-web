import { SharedModule } from 'src/app/shared/shared.module';
import { HealthFeedComponent } from './health-feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HealthFeedRoutingModule } from './health-feed-routing.module';
import { StartFreeComponent } from './start-free/start-free.component';


@NgModule({
  declarations: [HealthFeedComponent, StartFreeComponent],
  imports: [
    CommonModule,
    HealthFeedRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class HealthFeedModule { }
