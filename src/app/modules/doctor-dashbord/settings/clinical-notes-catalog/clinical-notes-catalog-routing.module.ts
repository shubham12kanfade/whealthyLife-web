import { ClinicalNotesCatalogComponent } from './clinical-notes-catalog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',component:ClinicalNotesCatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicalNotesCatalogRoutingModule { }
