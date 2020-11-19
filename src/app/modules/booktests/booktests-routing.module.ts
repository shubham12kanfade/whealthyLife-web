import { PopHealthComponent } from './pop-health/pop-health.component';
import { BooktestsComponent } from './booktests.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectCityComponent  }  from './select-city/select-city.component'


const routes: Routes = [

  {path :'',component:BooktestsComponent},
  {path :'select-city',component:SelectCityComponent},
  {path : 'pop-health',component: PopHealthComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooktestsRoutingModule { }
