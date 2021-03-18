import { element } from "protractor";
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
  siteKey: any = "6LcmyXoaAAAAAEJ-TaklnPhnqerCIQfAuc7nyapc";
  check1: boolean = false;
  check2: boolean = false;
  check3: boolean = false;
  check4: boolean = false;
  check5: boolean = false;
  check6: boolean = false;
  constructor(
    private services: ContactformService,
    private formBuilder: FormBuilder
  ) {}
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

  onClick1() {
    this.check1 = true;
  }
  onClick2() {
    this.check2 = true;
  }
  onClick3() {
    this.check3 = true;
  }
  onClick4() {
    this.check4 = true;
  }
  onClick5() {
    this.check5 = true;
  }
  onClick6() {
    this.check6 = true;
  }
}
