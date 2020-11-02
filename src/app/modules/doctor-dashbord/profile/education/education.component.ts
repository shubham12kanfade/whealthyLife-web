import { filter } from 'rxjs/operators';
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
  allDegree: any;
  Degree: any;


  constructor(private fb: FormBuilder, private MainService: MainService, public messageService: MessageService, ) {}
  ngOnInit() {
    this.InitPostService();
    this.getDegreesOnline();

this.getAll()



    this.reg.valueChanges.subscribe((resData) => {
      this.ylength.length=85
      this.year=new Date().getFullYear()
      console.log("EducationComponent -> ngOnInit -> resData", resData);
    });




    this.reg.controls["qualificationArray"].valueChanges.subscribe((resData)=>{
    console.log("EducationComponent -> ngOnInit -> resData", resData)
  
})



   
  }
getAll(){

  this.MainService.getDegree().then((resD)=>{
    this.allDegree=resD.data
      this.Degree=this.allDegree
      
    }).catch((err)=>{
    console.log("EducationComponent -> ngOnInit -> err", err)
    })
}

  AddDegree(val){
  console.log("EducationComponent -> AddDegree -> val", val)
  this.MainService.addDegree({degree:val}).then((resData)=>{
  console.log("EducationComponent -> AddDegree -> resData", resData)
  this.getAll()

  }).catch((err)=>{
  console.log("EducationComponent -> AddDegree -> err", err)
  })
  }


EnterValu(val){
 const data=val.toLowerCase()
 this.Degree= this.allDegree.filter((x)=> x.degree.toLowerCase().includes(data))
if(this.Degree.length!=0){
  console.log("true")
}else{
  console.log("false")
}
}
  getDegreesOnline() {
    this.MainService.getDoctorEducation().then((resDtat) => {
      const Data = [];
      resDtat.data.forEach((element, i) => {
        if(i + 1 != resDtat.data.length) {
          this.reg.controls["qualificationArray"]["controls"].push(
            this.fb.group({
              degree:[""],
              qualificationId: [""],
              completionYear: [""],
              college: [""],
            })
          );
        } 
        Data.push({
          degree:element.degree,
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
          degree:[""],
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
        degree:[""],
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
    this.arrdata=[]
    this.reg.value;
    const data = this.reg.controls["qualificationArray"]["controls"];
    data.forEach((element) => {
      this.arrdata.push(element.value);
    });
  this.arrdata.forEach((element ,i)=> {
const degId= this.allDegree.filter((x)=>x.degree ==element.degree )
console.log("EducationComponent -> save -> degId", degId[0]._id)
this.arrdata[i].qualificationId=degId[0]._id

  }); 

  
  console.log("EducationComponent -> save -> this.arrdata", this.arrdata)
  const daya ={qualificationArray:this.arrdata}
  this.MainService.addDoctorDegree(daya).then((resData)=>{
  console.log("EducationComponent -> save -> resData", resData)
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
