import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAccountsComponent } from './user-accounts.component';
import { NumberVerifyComponent } from './number-verify/number-verify.component';
import { AddEmailComponent } from './add-email/add-email.component';



const routes: Routes = [
  {path:'edit-profile',component:UserAccountsComponent},
  {path:'verify_number',component:NumberVerifyComponent},
  {path:'add_email',component:AddEmailComponent}
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountsRoutingModule { }
