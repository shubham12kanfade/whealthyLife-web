import { RequestImportExportComponent } from './request-import-export/request-import-export.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.scss']
})
export class ImportExportComponent implements OnInit {

  showImportExport:boolean=false;

  importtask: boolean=true;

  exporttask: boolean= false;
  

  constructor(public dialog: MatDialog) { }

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



RequestExpImpModalOpen() {
  const dialogRef = this.dialog.open(RequestImportExportComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    
  });
}

}
