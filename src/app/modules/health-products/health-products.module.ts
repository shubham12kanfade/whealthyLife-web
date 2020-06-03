import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthProductsRoutingModule } from './health-products-routing.module';
import { HealthProductsComponent } from './health-products.component';
import { SharedModule } from '../../shared/shared.module';
import { TabletsComponent } from './tablets/tablets.component';
import { SeniorCareComponent } from './senior-care/senior-care.component';
import { FamilyCareComponent } from './family-care/family-care.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FeminineHygieneComponent } from './feminine-hygiene/feminine-hygiene.component';
import { WomensCareComponent } from './womens-care/womens-care.component';
import { MotherCareComponent } from './mother-care/mother-care.component';
import { FitnessWellnessComponent } from './fitness-wellness/fitness-wellness.component';
import { ProteinSupplementsComponent } from './protein-supplements/protein-supplements.component';
import { MassGainersComponent } from './mass-gainers/mass-gainers.component';
import { SkinCareComponent } from './skin-care/skin-care.component';
import { AcneCareComponent } from './acne-care/acne-care.component';
import { BodyAndBathComponent } from './body-and-bath/body-and-bath.component';
import { FaceWashAndCleansersComponent } from './face-wash-and-cleansers/face-wash-and-cleansers.component';
import { SkinCareSupplimentsComponent } from './skin-care-suppliments/skin-care-suppliments.component';
import { HairCareComponent } from './hair-care/hair-care.component';
import { AntidandruffComponent } from './antidandruff/antidandruff.component';
import { AntihairlossComponent } from './antihairloss/antihairloss.component';
import { LipCareComponent } from './lip-care/lip-care.component';
import { LipBalmComponent } from './lip-balm/lip-balm.component';
import { SexualWellnessComponent } from './sexual-wellness/sexual-wellness.component';
import { CondomsComponent } from './condoms/condoms.component';
import { BabyCareComponent } from './baby-care/baby-care.component';
import { BabyBathComponent } from './baby-bath/baby-bath.component';
import { DiapersAndWipesComponent } from './diapers-and-wipes/diapers-and-wipes.component';
import { HealthProductHeaderComponent } from './health-product-header/health-product-header.component';



@NgModule({
  declarations: [HealthProductsComponent, TabletsComponent, SeniorCareComponent, FamilyCareComponent, ProductDetailsComponent, FeminineHygieneComponent, WomensCareComponent, MotherCareComponent, FitnessWellnessComponent, ProteinSupplementsComponent, MassGainersComponent, SkinCareComponent, AcneCareComponent, BodyAndBathComponent, FaceWashAndCleansersComponent, SkinCareSupplimentsComponent, HairCareComponent, AntidandruffComponent, AntihairlossComponent, LipCareComponent, LipBalmComponent, SexualWellnessComponent, CondomsComponent, BabyCareComponent, BabyBathComponent, DiapersAndWipesComponent, HealthProductHeaderComponent],
  imports: [
    CommonModule,
    HealthProductsRoutingModule,
    SharedModule,

  ]
})
export class HealthProductsModule { }
