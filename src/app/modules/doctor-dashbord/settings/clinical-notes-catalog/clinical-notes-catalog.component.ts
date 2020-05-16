import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinical-notes-catalog',
  templateUrl: './clinical-notes-catalog.component.html',
  styleUrls: ['./clinical-notes-catalog.component.scss']
})
export class ClinicalNotesCatalogComponent implements OnInit {
  first: boolean=true;
  second: boolean=false;
  third:boolean=false;
  fourth:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  firstbtn() {
    this.first = true;
    this.second = false;
    this.third = false;
    this.fourth = false;
    
  
  }
  secondbtn() {
    this.second = true;
    this.first = false ;
    this.third = false;
    this.fourth = false;

  }
  thirdbtn() {
    this.third = true;
    this.first = false;
    this.second = false;
    this.fourth = false;
  }
  fourthbtn() {
    this.fourth = true;
    this.first = false;
    this.second = false;
    this.third = false;
  }
}
