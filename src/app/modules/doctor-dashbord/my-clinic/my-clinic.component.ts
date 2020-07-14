import { Component, OnInit } from '@angular/core';

import { Address } from './address/address.module';

@Component({
  selector: 'app-my-clinic',
  templateUrl: './my-clinic.component.html',
  styleUrls: ['./my-clinic.component.scss']
})
export class MyClinicComponent implements OnInit {

  Address = new Address();
  dataArray = [];

  keyword = 'name';
  public countries = [
    {
      id: 1,
      name: 'Clininc 1 ',
    },
    {
      id: 2,
      name: 'Clininc 2',
    },
    {
      id: 3,
      name: 'Clininc 3',
    },
    {
      id: 4,
      name: 'Clininc 4',
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.Address = new Address();
    this.dataArray.push(this.Address);
  }

  addAddress(){
   this.Address = new Address();
   
   this.dataArray.push(this.Address);
   
  }

  removeAddress(index){
    this.dataArray.splice(index)
  }

  onSave(){
    console.log("MyClinicComponent -> addAddress -> this.Address", this.Address)
    console.log("MyClinicComponent -> addAddress -> this.dataArray", this.dataArray)
  }



  selectEvent(item) {
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }
}
