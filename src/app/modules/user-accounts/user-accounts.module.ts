import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountsRoutingModule } from './user-accounts-routing.module';
import { UserAccountsComponent } from './user-accounts.component';
import { NumberVerifyComponent } from './number-verify/number-verify.component';
import { AddEmailComponent } from './add-email/add-email.component';


@NgModule({
  declarations: [UserAccountsComponent, NumberVerifyComponent, AddEmailComponent],
  imports: [
    CommonModule,
    UserAccountsRoutingModule
  ]
})
export class UserAccountsModule { }
