import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooktestsRoutingModule } from './booktests-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SelectCityComponent } from './select-city/select-city.component';


@NgModule({
  declarations: [SelectCityComponent],
  imports: [
    CommonModule,
    BooktestsRoutingModule,
    SharedModule
  ]
})
export class BooktestsModule { }
