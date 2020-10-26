// import { MyclinicService } from './../../../../services/myclinic.service';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { MyclinicService } from 'src/app/services/myclinic.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-clinic',
  templateUrl: './display-clinic.component.html',
  styleUrls: ['./display-clinic.component.scss']
})
export class DisplayClinicComponent implements OnInit {
  DocId: any;
  clinicId: any=[];
  clinic: any;
  ele: any = [];
  getLocation: any;
  arr: any =[];
  ClinicName: any=[];
  did: any;
  Address:any=[];
  ClicId: any = [];

  constructor(public mainService: MainService, public myclinicService : MyclinicService,
     public userService:UserService) {


      const docData=this.userService.getUserInfo();

      this.DocId= docData._id;


      this.myclinicService.getClinic(this.DocId).then(resData=>{



        for(let i= 0; i < resData.data.length ;i++){
          this.ClinicName[i] = resData.data[i].name


          this.clinicId[i] = resData.data[i]._id;


          this.myclinicService.getClinicLocation(this.clinicId[i] ).then(ClinicAdd =>{



          for(let k = 0; k< ClinicAdd.data.length; k++ ){
            this.ClicId[k] = ClinicAdd.data[k].clinicId;

          }



          for(let a=0; a < ClinicAdd.data.length; a++ ){
            this.Address[a]=ClinicAdd.data[a].location;


          }

          }).catch(error =>{
          console.log(": ----------------------------------------");
          console.log("DisplayClinicComponent -> error", error);
          console.log(": ----------------------------------------");

          })

        }


      }).catch(error=>{
        console.log(": ------------------------------------------");
        console.log("ClinicInformationComponent -> error", error);
        console.log(": ------------------------------------------");

      })

   }



  ngOnInit(): void {
  }

}
