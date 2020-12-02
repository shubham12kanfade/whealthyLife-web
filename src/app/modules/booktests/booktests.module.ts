import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooktestsRoutingModule } from './booktests-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SelectCityComponent } from './select-city/select-city.component';
import { PopHealthComponent } from './pop-health/pop-health.component';
import { ISOComponent } from './pop-health/iso/iso.component';
import { NABLComponent } from './pop-health/nabl/nabl.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SelectCityComponent,
    PopHealthComponent,
    ISOComponent,
    NABLComponent,

   ],
  imports: [
    CommonModule,
    BooktestsRoutingModule,
    SharedModule,ReactiveFormsModule
  ]
})
export class BooktestsModule { }
