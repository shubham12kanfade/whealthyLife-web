import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthProductsComponent } from './health-products.component';
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


const routes: Routes = [

  {path:'',component:HealthProductsComponent},
  {path:'tablet', component:TabletsComponent},
  {path:'senior-care',component:SeniorCareComponent},
  {path:'family-care',component:FamilyCareComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'feminine-hygiene',component:FeminineHygieneComponent},
  {path:'womens-care',component:WomensCareComponent},
  {path:'mother-care',component:MotherCareComponent},
  {path:'fitness-wellness',component:FitnessWellnessComponent},
  {path:'protein-supplements',component:ProteinSupplementsComponent},
  {path:'mass-gainers',component:MassGainersComponent},
  {path:'skin-care',component:SkinCareComponent},
  {path:'acne-care',component:AcneCareComponent},
  {path:'body-and-bath',component:BodyAndBathComponent},
  {path:'face-wash-and-cleansers',component:FaceWashAndCleansersComponent},
  {path:'skin-care-supplement',component:SkinCareSupplimentsComponent},
  {path:'hair-care',component:HairCareComponent},
  {path:'antidandruff',component:AntidandruffComponent},
  {path:'antihairloss',component:AntihairlossComponent},
  {path:'lip-care',component:LipCareComponent},
  {path:'lip-balm',component:LipBalmComponent},
  {path:'sexual-wellness',component:SexualWellnessComponent},
  {path:'condoms',component:CondomsComponent},
  {path:'baby-care',component:BabyCareComponent},
  {path:'baby-bath',component:BabyBathComponent},
  {path:'diapers-and-wipes',component:DiapersAndWipesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthProductsRoutingModule { }
