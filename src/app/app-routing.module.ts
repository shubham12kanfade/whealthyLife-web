import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { BookHealthCheckupsComponent } from './modules/book-health-checkups/book-health-checkups.component';
import { ChatWithDoctorComponent } from './modules/chat-with-doctor/chat-with-doctor.component';




const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'tests',component:BookHealthCheckupsComponent},
  {path:'consult',component:ChatWithDoctorComponent}

  ,
  {path: '',loadChildren: () => import('./modules/home/home.module').then(h => h.HomeModule)},
  {path: '',loadChildren: () => import('./modules/user-profile/user-profile.module').then(u => u.UserProfileModule)},

  {path: 'contact',loadChildren: () => import('./modules/contact-us/contact-us.module').then(c => c.ContactUsModule)},
  {path: 'about',loadChildren: () => import('./modules/about/about.module').then(a => a.AboutModule)},
  {path: 'bookappoiment',loadChildren: () => import('./modules/bookappoiment/bookappoiment.module').then(b => b.BookappoimentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
