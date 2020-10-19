import { MainService } from "./../../../../services/main.service";
import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatStepper } from "@angular/material/stepper";
import { MessageService } from 'primeng/api';
@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
})
export class EducationComponent implements OnInit {
  @Input() stepper: MatStepper;
  reg = this.fb.group({});
  arrdata: any = [];
  lengthValue: any = 0;
  ylength:any=[];
  year: number;

  constructor(private fb: FormBuilder, private MainService: MainService, public messageService: MessageService, ) {}
  ngOnInit() {
    this.InitPostService();
    this.getDegreesOnline();
    this.reg.valueChanges.subscribe((resData) => {
      this.ylength.length=85
      this.year=new Date().getFullYear()
      console.log("EducationComponent -> ngOnInit -> resData", resData);
    });
  }

  getDegreesOnline() {
    this.MainService.getDoctorEducation().then((resDtat) => {
      const Data = [];
      resDtat.data.forEach((element, i) => {
        if(i + 1 != resDtat.data.length) {
          this.reg.controls["qualificationArray"]["controls"].push(
            this.fb.group({
              qualificationId: [""],
              completionYear: [""],
              college: [""],
            })
          );
        } 
        Data.push({
          qualificationId: element.qualificationId,
          completionYear: element.completionYear,
          college: element.college,
        });
      });
      this.reg.controls["qualificationArray"].patchValue(Data);
    });
  }
  InitPostService() {
    this.reg.addControl(
      "qualificationArray",
      this.fb.array([
        this.fb.group({
          qualificationId: [""],
          completionYear: [""],
          college: [""],
        }),
      ])
    );
  }
  addPostService() {
    this.reg.controls["qualificationArray"]["controls"].push(
      this.fb.group({
        qualificationId: [""],
        completionYear: [""],
        college: [""],
      })
    );
  }

  getControlName(controlName) {
    return this.reg.controls[controlName]["controls"];
  }

  remDegree(rem) {
    this.reg.controls["qualificationArray"]["controls"].splice(rem, 1);
  }
  save() {
    this.reg.value;
    const data = this.reg.controls["qualificationArray"]["controls"];
    data.forEach((element) => {
      console.log("EducationComponent -> save -> element", element.value);
      this.arrdata.push(element.value);
    });

    console.log("EducationComponent -> save -> this.arrdata", this.arrdata);
const data1={'qualificationArray':this.arrdata}
this.MainService.addDoctorDegree(data1).then((resData)=>{
  this.showToast('success', 'Profile', 'Education Qualification Add Succefully');
  this.stepper.next();
}).catch((err)=>{
console.log("EducationComponent -> save -> err", err)
  
})

  }


  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }

}
