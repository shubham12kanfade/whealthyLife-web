import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CalendarModule } from 'primeng/calendar';
import { CdkTableModule } from '@angular/cdk/table';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import {DropdownModule} from 'primeng/dropdown';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import { MatOption, MatOptionModule } from '@angular/material/core';

const material = [
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
  MatPaginatorModule,
  MatDatepickerModule,
  CalendarModule,
  CdkTableModule,
  ToastModule,
  MessagesModule,
  MessageModule,
  ProgressSpinnerModule,
  MatSelectModule,
  MatCardModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatGridListModule,
  MatTooltipModule,
  MatBadgeModule,
  MatExpansionModule,
  MatSliderModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatOptionModule,
]

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
  MatPaginatorModule,
  MatDatepickerModule,
  CalendarModule,
  CdkTableModule,
  ToastModule,
  MessagesModule,
  MessageModule,
  ProgressSpinnerModule,
  MatSelectModule,
  MatCardModule,
  MatButtonToggleModule,
  MatStepperModule,
  material,
  DropdownModule,
  MatGridListModule,
  MatTooltipModule,
  MatBadgeModule,
  MatExpansionModule,
  MatSliderModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatOptionModule
  ],
  exports: [
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
    MatPaginatorModule,
    MatDatepickerModule,
    CalendarModule,
    CdkTableModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ProgressSpinnerModule,
    MatSelectModule,
    MatCardModule,
    MatButtonToggleModule,
    MatStepperModule,
    material,
    DropdownModule,
    MatGridListModule,
    MatTooltipModule,
    MatBadgeModule,
    MatExpansionModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatOptionModule,
  ]
})
export class SharedModule { }
