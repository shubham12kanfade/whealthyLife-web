import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '',loadChildren: () => import('./modules/home/home.module').then(h => h.HomeModule)},
  {path: 'contact',loadChildren: () => import('./modules/contact-us/contact-us.module').then(c => c.ContactUsModule)},
  {path: 'about',loadChildren: () => import('./modules/about/about.module').then(a => a.AboutModule)},
  {path: 'bookappoiment',loadChildren: () => import('./modules/bookappoiment/bookappoiment.module').then(b => b.BookappoimentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
