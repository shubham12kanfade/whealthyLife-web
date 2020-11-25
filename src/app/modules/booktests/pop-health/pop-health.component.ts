import { MedicineService } from './../../../services/medicine.service';
import { DataSecurityComponent } from './../../doctor-dashbord/settings/data-security/data-security.component';
import { MainService } from "src/app/services/main.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ISOComponent } from "./iso/iso.component";
import { NABLComponent } from "./nabl/nabl.component";

@Component({
  selector: "app-pop-health",
  templateUrl: "./pop-health.component.html",
  styleUrls: ["./pop-health.component.scss"],
})
export class PopHealthComponent implements OnInit {
  id: any;
  LabId: any;
  labPack: any=[];
  panelOpenState = false;
  constructor(
    public dialog: MatDialog,
    private Router: ActivatedRoute,
    private MainService: MainService,
    private MedicineService:MedicineService
  ) {}

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

      this.MainService.getAllDtailsLabs(this.LabId)
        .then((resData) => {
          console.log("PopHealthComponent -> ngOnInit -> resData", resData.data);

          this.labPack = resData.data
          console.log("PopHealthComponent -> ngOnInit -> this.labPack", this.labPack);

          // for(let i = 0; i< resData.data.length; i++){

          // }




        })
        .catch((err) => {
          console.log("PopHealthComponent -> ngOnInit -> err", err);
        });
    });


    this.MainService.getCustReview(this.labPack.labId).then(ReviewRes => {
    console.log(": ------------------------------------------------------");
    console.log("PopHealthComponent -> ngOnInit -> ReviewRes", ReviewRes);
    console.log(": ------------------------------------------------------");

    })

    this.MainService.getallPackage().then(packRes => {
    console.log("🚀 ~ file: pop-health.component.ts ~ line 74 ~ PopHealthComponent ~ this.MainService.getallPackage ~ packRes", packRes);

    }).catch(err => {
    console.log("🚀 ~ file: pop-health.component.ts ~ line 79 ~ PopHealthComponent ~ this.MainService.getallPackage ~ err", err)
    })


  }

  AddTocart(val,val2,val3){
    console.log("PopHealthComponent -> AddTocart -> val,val2,val3", val,val2,val3)
    this.MedicineService.PostPackageInCart({packageId: val, ammount: val2, "type": "Test", labId: val3})
  }



}
