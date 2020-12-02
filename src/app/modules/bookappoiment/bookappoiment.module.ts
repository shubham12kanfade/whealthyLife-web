import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookappoimentComponent } from './bookappoiment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BookappoimentRoutingModule } from './bookappoiment-routing.module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';



@NgModule({
  declarations: [BookappoimentComponent,
    PatientDetailsComponent],
  imports: [
    CommonModule,
    BookappoimentRoutingModule,
    FormsModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    CarouselModule,
  ]
})
export class BookappoimentModule { }
