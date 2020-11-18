import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooktestsRoutingModule } from './booktests-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SelectCityComponent } from './select-city/select-city.component';
// import { PopHealthComponent } from './pop-health/pop-health.component';
// import { ISOPopComponent } from './pop-health/iso-pop/iso-pop.component';
// import { NABLPopComponent } from './pop-health/nabl-pop/nabl-pop.component';



@NgModule({
  declarations: [SelectCityComponent,
    // PopHealthComponent, ISOPopComponent, NABLPopComponent
   ],
  imports: [
    CommonModule,
    BooktestsRoutingModule,
    SharedModule
  ]
})
export class BooktestsModule { }
