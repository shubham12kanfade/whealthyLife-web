import { BooktestsComponent } from './../booktests.component';
import { startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { CurrentLocIpService } from './../../../services/current-loc-ip.service';
import { BookingService } from './../../../services/booking.service';
import { Component, Inject, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.scss']
})
export class SelectCityComponent implements OnInit {
  city: any;
  citys: any;
  val:boolean=true;
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<BooktestsComponent> 
    ,private BookingService:BookingService,private CurrentLocIpService:CurrentLocIpService,) { 
     
    
    this.CurrentLocIpService.getData().then((resData)=>{
      this.city=resData.city
      console.log("🚀 ~ file: select-city.component.ts ~ line 19 ~ SelectCityComponent ~ this.CurrentLocIpService.getData ~  this.city",  this.city)



    }).catch((err)=>{
    console.log("🚀 ~ file: select-city.component.ts ~ line 16 ~ SelectCityComponent ~ this.CurrentLocIpService.getData ~ err", err)
    })

    this.BookingService.getAllLabsCity().then((resData)=>{
this.citys=resData.data
this.citys.forEach(element => {
  this.options.push(element._id)
  
});
    }).catch((err)=>{
    console.log("🚀 ~ file: select-city.component.ts ~ line 23 ~ SelectCityComponent ~ this.BookingService.getAllLabsCity ~ err", err)
      
    })
    
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
   _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  ValGetBL(){
   const data2 =this.myControl.value
  const data =  this.options.filter(x => x.toLowerCase().includes(data2) );

  if(data.length)
{
  this.dialogRef.close(data2);
}
else{
  this._snackBar.open('Please Enter Valid City', '', {
    duration: 2000,
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    panelClass: ['redNoMatch']
  });

}




    
  }
  valFun(val){
    this.val=val
  }
  ValGet(){
    this.dialogRef.close(this.myControl.value);
  }
  ValGetS(val){
    console.log("🚀 ~ file: select-city.component.ts ~ line 64 ~ SelectCityComponent ~ ValGetS ~ val", val)
    this.dialogRef.close(val);
  }


}
