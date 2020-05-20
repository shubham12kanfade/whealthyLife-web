import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {FullCalendarModule} from 'primeng/fullcalendar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    FullCalendarModule
  ],
  exports: [
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    FullCalendarModule
  ]
})
export class SharedModule { }
