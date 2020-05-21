import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    FullCalendarModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    FullCalendarModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
