import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-consultant-details',
  templateUrl: './consultant-details.component.html',
  styleUrls: ['./consultant-details.component.scss']
})
export class ConsultantDetailsComponent implements OnInit {

  @Input() stepper: any;
  items: any = [];
  // empForm: FormGroup;
  memberForm : FormGroup;
  profileData: any;
  TimeSloat: any[];
  data12: any[];
  data:any[];

  constructor(public mainService: MainService,
    public messageService: MessageService,
    public router: Router,
    private fb:FormBuilder) {
      this.memberForm = this.fb.group({
        ClinicDetails: this.fb.array([this.createClinicDetails()]),
        fees : [''],
        establishmentHour : [''],

      })

    this.getProfile();

    this.mainService.getAllClinic().then(AllClinicName =>{
    console.log("ConsultantDetailsComponent -> AllClinicName", AllClinicName);

    const dfgf= AllClinicName.data;
    this.data = AllClinicName.data;
    console.log("ConsultantDetailsComponent -> dfgf", dfgf)

    // for( let i=0 ; i < dfgf.length ; i++ ){
    //   this.data12.push(dfgf[i]);
    //   // this.data.push(dfgf[i]);
    // }
    // console.log("ConsultantDetailsComponent ->  this.data12",  this.data12);
    //  this.data12 = AllClinicName

    }).catch(error =>{
    console.log("ConsultantDetailsComponent -> error", error);
    })
  }

  ClinicDetails() {
    return this.memberForm.get("ClinicDetails") as FormArray;
  }

  createClinicDetails(): FormGroup {
    return this.fb.group({
      clinicName : [''],
      clinicAddress : [''],
      times: this.fb.array([this.createtimes()]),
    });
  }

  addClinicDetails() {
    this.ClinicDetails().push(this.createClinicDetails());
  }

  deleteClinicDetails(j: number) {
    this.ClinicDetails().removeAt(j);
  }

  createtimes(): FormGroup {
    return this.fb.group({
      session1Start : [''],
      session1End : [''],
      timeday : ['']
    });
  }

  times(index = 0) {
    var array = this.memberForm.get("ClinicDetails") as FormArray;
    const resFloors = array.controls[index].get("times") as FormArray;
    return resFloors;
  }

  addTime(index) {
    this.times(index).push(this.createtimes());
  }

  deleteTime(index:number,i: number) {
    this.times(index).removeAt(i);
  }


  keyword = 'name';





  // data = [
  //    {
  //      id: 1,
  //      name: 'Usa'
  //    },
  //    {
  //      id: 2,
  //      name: 'England'
  //    }
  // ];
 
 
  selectEvent(item) {
    console.log("ConsultantDetailsComponent -> selectEvent -> item", item)
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    console.log("ConsultantDetailsComponent -> onChangeSearch -> val", val)
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    console.log("ConsultantDetailsComponent -> onFocused -> e", e)
    // do something when input is focused
  }


  keyword1 = 'name';

  // getAddress(){
  //   this.mainService.getAddressByClinic()
  // }



  // data = [
  //    {
  //      id: 1,
  //      name: 'Usa'
  //    },
  //    {
  //      id: 2,
  //      name: 'England'
  //    }
  // ];
 
 
  selectEvent1(item) {
    // do something with selected item
  }
 
  onChangeSearch1(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused1(e){
    // do something when input is focused
  }








  getProfile() {
    this.mainService.getProfile().then(resData => {
      this.memberForm.patchValue(resData.data);
    }).catch(error => {
      console.log("EditProfileComponent -> getProfile -> error", error);
    })
  }

  onSave() {
    this.mainService.updateUserprofile(this.memberForm.value).then(resData => {
      this.showToast('success', 'Profile', 'Profile updated successfully');
      this.router.navigate(['/Doctor/Profile']);
    }).catch(error => {
      console.log("EditProfileComponent -> onSave -> error", error)
    })
  }

  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }

  ngOnInit() { 
    this.getTime();
  }

  getTime() {
    this.TimeSloat = [];
    
    for (var i = 0; i < 24; i++) {
      var hour = i < 10 ? '0' + i : i;
      // if (i <= 13) {
        this.TimeSloat.push({ label: hour + ':00', value: hour + ':00' });
        this.TimeSloat.push({ label: hour + ':30', value: hour + ':30' });
        // } else {
          //   this.TimeSloat2.push({ label: hour + ':00', value: hour + ':00' });
          //   this.TimeSloat2.push({ label: hour + ':30', value: hour + ':30' });
          // }
        }
        
        console.log("ConsultantDetailsComponent -> getTime -> this.TimeSloat", this.TimeSloat)
  }

}
