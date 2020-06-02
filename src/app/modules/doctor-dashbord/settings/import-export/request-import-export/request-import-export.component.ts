import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-import-export',
  templateUrl: './request-import-export.component.html',
  styleUrls: ['./request-import-export.component.scss']
})

export class RequestImportExportComponent implements OnInit {
  import:String="Import"
  constructor() { }
  onClick(val){
this.import=val;
  }
  ngOnInit(): void {
  }

}
