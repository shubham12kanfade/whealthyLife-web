import { UserService } from './../../../../services/user.service';
import { MyclinicService } from './../../../../services/myclinic.service';
import { Component, OnInit } from '@angular/core';
import { Address } from '../address/address.module';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-clinic-information',
  templateUrl: './clinic-information.component.html',
  styleUrls: ['./clinic-information.component.scss']
})
export class ClinicInformationComponent implements OnInit {
  Address = new Address();
  dataArray = [];
  AddClinic: FormGroup;
  avatar: any;
  submitted: boolean =false;

  keyword = 'name';

  DocId: any;

  constructor(public mainService: MainService, public messageService: MessageService,
    public myclinicService : MyclinicService, private fb: FormBuilder, public userService:UserService) {

      this.AddClinic = this.fb.group({
        name : [''],
      })

      const docData=this.userService.getUserInfo();
     console.log(": ----------------------------------------------");
     console.log("ClinicInformationComponent -> docData", docData);
     console.log(": ----------------------------------------------");

     this.DocId= docData._id;
     console.log(": ----------------------------------------------------");
     console.log("ClinicInformationComponent -> this.DocId", this.DocId);
     console.log(": ----------------------------------------------------");


    }


    // employees(): FormArray {
    //   return this.AddClinic.get("employees") as FormArray
    // }


    // newEmployee(): FormGroup {
    //   return this.fb.group({
    //     street: ['', Validators.required],
    //     landmark: ['', Validators.required],
    //     country: ['', Validators.required],
    //     state: ['', [Validators.required]],
    //     city: ['', [Validators.required, Validators.minLength(6)]],
    //     pincode: ['', [Validators.required]],
    //   })
    // }

    // addEmployee() {
    //   this.employees().push(this.newEmployee());
    // }

    // removeEmployee(empIndex:number) {
    //   this.employees().removeAt(empIndex);
    // }


  ngOnInit(): void {

  }


  onSave() {
    // this.getclinic();

    alert(JSON.stringify (this.AddClinic.value));

    if(this.AddClinic.invalid){
      return
    }

    const data = {
      ...this.AddClinic.value,
      addedBy:this.DocId
    }

    this.myclinicService.addClinic(data).then(resData =>{
    console.log(": --------------------------------------------------------");
    console.log("ClinicInformationComponent -> onSave -> resData", resData);
    console.log(": --------------------------------------------------------");
    }).catch(error=>{
    console.log(": ----------------------------------------------------");
    console.log("ClinicInformationComponent -> onSave -> error", error);
    console.log(": ----------------------------------------------------");
    })

  }



  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e){
    // do something when input is focused
  }

}
