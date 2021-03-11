import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { ContactformService } from "src/app/services/contactform.service";
@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  siteKey: string;
  constructor(
    private services: ContactformService,
    private formBuilder: FormBuilder
  ) {
    this.siteKey = "6LcmyXoaAAAAAEJ-TaklnPhnqerCIQfAuc7nyapc";
  }
  contactFrom = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    subject: new FormControl(""),
    message: new FormControl(""),
  });
  ngOnInit(): void {
    this.contactFrom = this.formBuilder.group({
      recaptcha: ["", Validators.required],
    });
  }
  alert: boolean = false;

  onSubmit() {
    this.services.addData(this.contactFrom.value).subscribe((data) => {
      this.alert = true;
      this.contactFrom.reset();
      console.log(data);
    });
    // console.log(this.contactFrom.value);
  }
  closeAlert() {
    this.alert = false;
  }
}
