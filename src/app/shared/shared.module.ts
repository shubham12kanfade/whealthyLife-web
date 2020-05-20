import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
<<<<<<< HEAD
import {MatButtonModule} from '@angular/material/button';
=======
import {MatDialogModule} from '@angular/material/dialog';


>>>>>>> b3a2e949d9e796dbe1a84084f12c415a271027c9
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
<<<<<<< HEAD
    MatButtonModule
=======
    MatDialogModule
>>>>>>> b3a2e949d9e796dbe1a84084f12c415a271027c9
  ],
  exports: [
    MatTabsModule,
    MatIconModule,
<<<<<<< HEAD
    MatButtonModule
=======
    MatDialogModule
>>>>>>> b3a2e949d9e796dbe1a84084f12c415a271027c9
  ]
})
export class SharedModule { }
