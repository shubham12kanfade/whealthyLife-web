import { BookappoimentComponent } from './bookappoiment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookappoimentRoutingModule } from './bookappoiment-routing.module';
import { ChatnowComponent } from './chatnow/chatnow.component';


@NgModule({
  declarations: [ChatnowComponent,BookappoimentComponent],
  imports: [
    CommonModule,
    BookappoimentRoutingModule
  ]
})
export class BookappoimentModule { }
