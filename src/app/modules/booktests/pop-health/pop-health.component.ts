import { MedicineService } from "./../../../services/medicine.service";
import { DataSecurityComponent } from "./../../doctor-dashbord/settings/data-security/data-security.component";
import { MainService } from "src/app/services/main.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ISOComponent } from "./iso/iso.component";
import { NABLComponent } from "./nabl/nabl.component";
import { Subject } from 'rxjs';

@Component({
  selector: "app-pop-health",
  templateUrl: "./pop-health.component.html",
  styleUrls: ["./pop-health.component.scss"],
})
export class PopHealthComponent implements OnInit {
  id: any;
  LabId: any;
  labPack: any = [];
  panelOpenState = false;
  packType: any;
  title: any;
  length: any;
  price: any;
  mrp: any;
  offerPercent: any;
  lName: any;
  discription: any;
  precaution: any;
  PProfile: any;
  TestDetails: any;
  lAbout: any;
  yourPrice: number;
  discount: number;
  addCheck: Subject<String> = new Subject();
  constructor(
    public dialog: MatDialog,
    private Router: ActivatedRoute,
    private MainService: MainService,
    private MedicineService: MedicineService
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(ISOComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2() {
    const dialogRef = this.dialog.open(NABLComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
    this.Router.params.subscribe((params) => {
      console.log("PopHealthComponent -> ngOnInit -> params", params["id"]);
      this.LabId = params["id"];
      this.packType = params["type"];
    });

    if (this.packType == "package") {
      this.getPackagesApi();
    }
    else if (this.packType == "profile") {
      this.getProfileApi();
    }
    else if (this.packType == "test") {
      this.getTESTApi();
    }
    this.getRew();
  }
  getTESTApi() {
    this.MainService.getTestById(this.LabId).then((resData) => {
      this.labPack = resData.data;
      this.title = this.labPack[0].testId?.title
      this.length = this.labPack[0].length
      // this.price = this.labPack[0].testId?.yourPrice
      this.mrp = this.labPack[0].mrp
      this.offerPercent = this.labPack[0].discountOffer
      this.lName = this.labPack[0].labId?.name
      this.lAbout = this.labPack[0].labId?.about
      this.discription =  this.labPack[0].description
      this.precaution = this.labPack[0].testId?.precautions
      this.discount = parseInt(this.mrp) * parseInt(this.offerPercent) /100
      this.price = parseInt(this.mrp) - this.discount
    }).catch((err) => {
      console.log("🚀 ~ file: pop-health.component.ts ~ line 99 ~ PopHealthComponent ~ this.MainService.getTestById ~ err", err)
    })


  }
  getProfileApi() {
    this.TestDetails = []
    this.MainService.getProfileById(this.LabId).then((resData) => {
      this.labPack = resData.data;
      this.title = this.labPack?.profile?.title
      this.length = this.labPack?.profileTests?.length
      this.price = this.labPack?.profile?.yourPrice
      this.mrp = this.labPack?.profile?.mrp
      this.offerPercent = this.labPack?.profile?.offerPercent
      this.lName = this.labPack?.profile?.labId?.name
      this.discription = this.labPack?.profile?.description
      this.precaution = this.labPack?.profile?.precaution
      this.PProfile = this.labPack.profileTests
      this.labPack.profileTests.forEach(element => {
        element?.testId
        this.TestDetails.push(element?.testId)
      });
    }).catch((err) => {
      console.log("🚀 ~ file: pop-health.component.ts ~ line 68 ~ PopHealthComponent ~ this.MainService.getDataFormProfile ~ err", err)
    })
  }
  getPackagesApi() {
    this.MainService.getAllDtailsLabs(this.LabId)
      .then((resData) => {
        this.labPack = resData.data;
        this.title = this.labPack?.package?.title
        this.length = this.labPack?.packageProfiles?.length
        this.price = this.labPack?.package?.yourPrice
        this.mrp = this.labPack?.package?.mrp
        this.offerPercent = this.labPack?.package?.offerPercent
        this.lName = this.labPack?.package?.labId?.name
        this.discription = this.labPack?.package?.description
        this.precaution = this.labPack?.package?.precaution
        this.PProfile = this.labPack.packageProfiles

      })
      .catch((err) => {
        console.log("PopHealthComponent -> ngOnInit -> err", err);
      });
  }
  getRew() {
    this.MainService.getCustReview(this.labPack.labId).then((ReviewRes) => {
    });
  }
  AddTocart(val2, val3) {
    console.log("PopHealthComponent -> AddTocart -> val2,val3",val2,val3);
    let data4;
    this.packType=='test'?data4={testId:this.LabId}: this.packType=='profile'?data4={profiledId:this.LabId}: this.packType=='package'?data4={packageId:this.LabId}:'null'
    const data5 ={
        ...data4,
        ammount: val2,
        labId: val3,
        type:   this.packType=='test'?'Test': this.packType=='profile'?'Profile': this.packType=='package'?'Package':'Package',
    }
    this.MedicineService.PostPackageInCart(data5).then((resData)=>{
      this.addCheck.next(resData)
    }).catch((err)=>{
    console.log("🚀 ~ file: pop-health.component.ts ~ line 156 ~ PopHealthComponent ~ this.MedicineService.PostPackageInCart ~ err", err);
    })
  }
}
