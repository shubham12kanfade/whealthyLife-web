import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MainService } from 'src/app/services/main.service';
import { MyclinicService } from 'src/app/services/myclinic.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {
  // Address = new Address();
  dataArray = [];
  AddClinic: FormGroup;
  avatar: any;
  submitted: boolean =false;



  keyword = 'name';
  public countries = []
  //   {
  //     id: 1,
  //     name: 'Clininc 1 ',
  //   },
  //   {
  //     id: 2,
  //     name: 'Clininc 2',
  //   },
  //   {
  //     id: 3,
  //     name: 'Clininc 3',
  //   },
  //   {
  //     id: 4,
  //     name: 'Clininc 4',
  //   }
  // ];
  DocId: any;
  obj: any;
  clinicId: void;

  constructor(public mainService: MainService, public messageService: MessageService,
    public myclinicService : MyclinicService, private fb: FormBuilder, public userService:UserService) {

      this.AddClinic = this.fb.group({
        location: this.fb.array([this.createLocation()]),
      })

      const docData=this.userService.getUserInfo();

      this.DocId= docData._id;


      this.getclinic();


    }


    getclinic(){
      this.myclinicService.getClinic(this.DocId).then(resData=>{


        this.countries = resData.data;

        }).catch(error=>{
        console.log(": ------------------------------------------");
        console.log("ClinicInformationComponent -> error", error);
        console.log(": ------------------------------------------");

        })
    }

    location(): FormArray {
      return this.AddClinic.get("location") as FormArray;
    }

    createLocation(): FormGroup {
      return this.fb.group({
        address: ['', Validators.required],
        landmark: ['', Validators.required],
        country: ['', Validators.required],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        pincode: ['', [Validators.required]]
      });
    }

    addQuantity() {
      this.location().push(this.createLocation());
    }
    removeQuantity(i: number) {
      this.location().removeAt(i);
    }

    ngOnInit(){

    }


  onSave() {
    // this.getclinic();

    alert(JSON.stringify (this.AddClinic.value));

    if(this.AddClinic.invalid){
      return
    }

    const data = {
      ...this.AddClinic.value,
      clinicId : this.obj,
    }

    this.myclinicService.postAddClinicLocation(data).then(resData =>{

    }).catch(error=>{

    })


  //   console.log(this.AddClinic.value);
  //   this.submitted = true;

  //   if (this.AddClinic.invalid) {
  //     return;
  // }
  //   var data = {
  //     ...this.AddClinic.value,
  //   }
  //   this.mainService.updateUserprofile(data).then(resData => {
  //     console.log("EditProfileComponent -> onSave -> resData", resData)
  //     this.showToast('success', 'Profile', 'Profile updated successfully');
  //     next.next();
  //   }).catch(error => {
  //     console.log("EditProfileComponent -> onSave -> error", error)
  //   })
  }



  selectEvent(item) {

    this.obj = item._id;

    // do something with selected item
  }

  onChangeSearch(event) {

    const obj = event.value


    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e){

    // do something when input is focused
  }

}
