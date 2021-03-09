import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ContactformService } from "src/app/services/contactform.service";
@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  constructor(private services: ContactformService) {}

  ngOnInit(): void {}

  contactFrom = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    subject: new FormControl(""),
    message: new FormControl(""),
  });

  onSubmit() {
    this.services.addData(this.contactFrom.value).subscribe((data) => {
      console.log(data);
    });
    // console.log(this.contactFrom.value);
  }
}
