import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    FullCalendarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule
  ],
  exports: [
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    FullCalendarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule
  ]
})
export class SharedModule { }
