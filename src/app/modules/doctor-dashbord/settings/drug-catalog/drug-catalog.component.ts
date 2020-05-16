import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug-catalog',
  templateUrl: './drug-catalog.component.html',
  styleUrls: ['./drug-catalog.component.scss']
})
export class DrugCatalogComponent implements OnInit {
  items=10;

  constructor() { }

  ngOnInit(): void {
  }

}
