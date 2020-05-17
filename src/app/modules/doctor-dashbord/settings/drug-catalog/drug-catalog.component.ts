import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug-catalog',
  templateUrl: './drug-catalog.component.html',
  styleUrls: ['./drug-catalog.component.scss']
})
export class DrugCatalogComponent implements OnInit {
  // items=10;
  opmod: boolean=false;
  inp: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  modalopen(){
    this.opmod=!this.opmod;
  }
  inpfield(){
    this.inp=!this.inp;
  }
}
