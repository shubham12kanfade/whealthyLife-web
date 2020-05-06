import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  email: boolean = true;




  constructor() {

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
