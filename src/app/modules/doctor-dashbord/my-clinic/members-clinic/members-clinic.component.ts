import { Component, OnInit } from '@angular/core';




export interface PeriodicElement {
  avtar: string;
  name: string;
  Designation: string;
  JoiningDate: string;
  ClinicName: string;
  // Address: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { avtar:'../../../../../assets/images/doc2.jpg', name: 'Sunita Deshpande', Designation: "Doctor",JoiningDate : "12/12/2019", ClinicName :"Manoj Sharma Clinic" },
  { avtar:'../../../../../assets/images/doc2.jpg', name: 'Sumitra Wahle', Designation: "Doctor",JoiningDate : "24/01/2020", ClinicName :"Manoj Sharma Clinic" },
  { avtar:'../../../../../assets/images/doc2.jpg', name: 'Maroli Dabewala', Designation: "Doctor",JoiningDate : "15/05/2020", ClinicName :"Manoj Sharma Clinic" }
 
];



@Component({
  selector: 'app-members-clinic',
  templateUrl: './members-clinic.component.html',
  styleUrls: ['./members-clinic.component.scss']

 
})
export class MembersClinicComponent implements OnInit {
  // cols: { field: string; header: string; }[];
  // car :{Name: string; Designation: string; joining_Date:string; Clinic_Name:string;Address:string} [];

  displayedColumns: string[] = ['avtar','name', 'Designation','JoiningDate', 'ClinicName'];
  dataSource = ELEMENT_DATA;

  constructor() { 
   
  }

  ngOnInit(): void {


  }

}
