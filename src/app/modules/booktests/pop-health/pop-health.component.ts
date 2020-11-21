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

          for(let i = 0; i< resData.data.length; i++){
            this.labPack[i] = resData.data[i]
          console.log("PopHealthComponent -> ngOnInit -> this.labPack[i]", this.labPack[i]);
          }


          console.log("PopHealthComponent -> ngOnInit -> resData", resData.data);

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

  }

  AddTocart(val,val2){
  console.log("PopHealthComponent -> AddTocart -> val", val)
this.MedicineService.PostPackageInCart({"ammount": val2,"packageId ": val, "type": "Test"})


}
}
