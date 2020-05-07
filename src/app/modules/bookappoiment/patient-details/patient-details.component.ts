import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  
  
  
  emailbook = new FormGroup({
    email: new FormControl(''),
    fullname: new FormControl(''),
    mobile: new FormControl({value: '+918668206158', disabled: true}, Validators.required),

  
  });
  elsebook = new FormGroup({
    fullname: new FormControl(''),
    mobile:new FormControl({value: '+918668206158', disabled: true}, Validators.required),
    patientmobile: new FormControl(''),
    patientemail: new FormControl(''),
  
  });
  
  email: boolean = true;




  constructor() {
    
    console.log("PatientDetailsComponent -> constructor -> emailbook", this.emailbook)

    console.log("PatientDetailsComponent -> constructor -> elsebook", this.elsebook)
  }
  handleChange(evt) {
    var target = evt.target;
    if (target.checked) {
      this.email = true;
      console.log("PatientDetailsComponent -> handleChange -> check")

    }
  }
  handleChange2(evt) {
    var target = evt.target;
    if (target.checked) {
      this.email = false;
      console.log("PatientDetailsComponent -> handleChange -> else")

    }
  }


  ngOnInit(): void {
  }

}
