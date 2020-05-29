import { PrimeComponent } from './prime/prime.component';
import { ConsultComponent } from './consult/consult.component';
import { DriveComponent } from './drive/drive.component';
import { IntegrationsComponent } from './integrations.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',component:IntegrationsComponent,children:[
      {
        path: '', redirectTo: 'drive', pathMatch: 'full'
      },
      {path:'drive',component:DriveComponent},
      {path:'consult',component:ConsultComponent},
      {path:'prime',component:PrimeComponent},
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrationsRoutingModule { }
