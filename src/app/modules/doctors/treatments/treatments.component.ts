import { TreatmentsService } from './../../../services/treatments.service';
import { DoctorProfileService } from './../../../services/doctor-profile.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})
export class TreatmentsComponent implements OnInit {
  DocId: any;
  profileData: any;
  doctor: any;
  treatments: any;
  constructor(private ActivatedRoute:ActivatedRoute, private DoctorProfile:DoctorProfileService, private TreatmentsService:TreatmentsService) { 
    this.ActivatedRoute.params.subscribe(params => {
      this.DocId = params['id'];
      this.getProfileDetails()
      this.getTreatments()
  });
  }
  getProfileDetails() {
    const data = {
      findId:this.DocId,
    };
    this.DoctorProfile.getDoctorProfile(data)
      .then((resData) => {
        this.doctor = resData.data;
        console.log("TreatmentsComponent -> getProfileDetails -> resData.data", resData
        )
      })
      .catch((error) => {
        console.log(
          "DoctorProfileComponent -> getProfileDetails -> error",
          error
        );
      });
  }
  getTreatments(){
    this.TreatmentsService.getTreatmentsbyId(this.DocId).then((resData)=>{
      this.treatments=resData.data
      console.log("TreatmentsComponent -> getTreatments -> treatments++++++++++++++++++++++++++++++", this.treatments)
    }).catch((error)=>{
    console.log("TreatmentsComponent -> getTreatments -> error", error)
    })
  }
  ngOnInit(): void {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth' , block:'center'});
  }
}
