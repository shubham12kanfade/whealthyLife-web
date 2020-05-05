import { ChatWithDoctorComponent } from './modules/chat-with-doctor/chat-with-doctor.component';
import { BookHealthCheckupsComponent } from './modules/book-health-checkups/book-health-checkups.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: '',loadChildren: () => import('./modules/home/home.module').then(h => h.HomeModule)},
  {path: 'contact',loadChildren: () => import('./modules/contact-us/contact-us.module').then(c => c.ContactUsModule)},
  {path: 'about',loadChildren: () => import('./modules/about/about.module').then(a => a.AboutModule)},
  {path: 'bookappointment',loadChildren: () => import('./modules/bookappoiment/bookappoiment.module').then(b => b.BookappoimentModule)},
  {path: 'help',loadChildren: () =>import('./modules/help/help.module').then(h => h.HelpModule)},

  {path: 'booktests',loadChildren:() => import('./modules/booktests/booktests.module').then(b => b.BooktestsModule)},
  {path: 'medicines',loadChildren:() => import('./modules/health-medicineshealth/health-medicineshealth.module').then(m => m.HealthMedicineshealthModule)},

  {path : 'bookcheckup', component:BookHealthCheckupsComponent},

  {path : 'chatwithdoctor', component:ChatWithDoctorComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
