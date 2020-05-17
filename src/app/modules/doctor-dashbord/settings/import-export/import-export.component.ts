import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.scss']
})
export class ImportExportComponent implements OnInit {

  showImportExport:boolean=false;

  importtask: boolean=true;

  exporttask: boolean= false;

  constructor() { }

  ngOnInit(): void {
  }


  ImportExport(){
    this.showImportExport=!this.showImportExport;
  }


  Importhide(){
 this.importtask = true;
    this.exporttask = false;
  }

Exporthide(){

  this.exporttask = true;
  this.importtask = false ;
}

}
