import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactUsRoutingModule } from "./contact-us-routing.module";
import { NgxCaptchaModule } from "ngx-captcha";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCaptchaModule,
  ],
})
export class ContactUsModule {}
