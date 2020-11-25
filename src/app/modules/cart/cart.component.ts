import { MedicineService } from './../../services/medicine.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddressPopupComponent } from './address-popup/address-popup.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {
  CartData: any;
  saveRupee: Number;



  constructor(public dialog: MatDialog, private MedicineService:MedicineService) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddressPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit() {
    this.MedicineService.getPackageInCart().then((resData)=>{
      this.CartData=resData.data
      console.log("🚀 ~ file: cart.component.ts ~ line 37 ~ CartComponent ~ this.MedicineService.getPackageInCart ~ this.CartData", this.CartData);
    }).catch((err)=>{
    console.log("CartComponent -> ngOnInit -> err", err)

    })


    // this.saveRupee =  (this.CartData?.packageId?.yourPrice * (this.CartData?.packageId?.offerPercent / 100))
    // console.log("🚀 --------------------------------------------------------------------------------------------------");
    // console.log("🚀 ~ file: cart.component.ts ~ line 40 ~ CartComponent ~ ngOnInit ~ this.saveRupee", this.saveRupee);
    // console.log("🚀 --------------------------------------------------------------------------------------------------");

  }
  removeAt(id){
      console.log("CartComponent -> removeAt -> id", id)
      this.MedicineService.DelePackageInCart(id).then((resData)=>{
      console.log("CartComponent -> removeAt -> resData", resData)
      this.ngOnInit()
  }).catch((err)=>{
    console.log("CartComponent -> removeAt -> err", err)

  })
  }

}
