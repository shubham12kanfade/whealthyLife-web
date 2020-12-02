import { SettingsComponent } from './settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',component:SettingsComponent,children:[
      {path: 'practice-details',loadChildren: () => import('./practice-details/practice-details.module').then(dd => dd.PracticeDetailsModule )},
      {path: 'PracticeStaff',loadChildren: () => import('./practice-staff/practice-staff.module').then(dd => dd.PracticeStaffModule )},
      {path: 'Calendar',loadChildren: () => import('./calendar/calendar.module').then(dd => dd.CalendarModule)},
      {path: 'Communications',loadChildren: () => import('./communications/communications.module').then(dd => dd.CommunicationsModule)},
      {path: 'PricingCatalog',loadChildren: () => import('./pricing-catalog/pricing-catalog.module').then(dd => dd.PricingCatalogModule )},
      {path: 'ConsentForms',loadChildren: () => import('./consent-forms/consent-forms.module').then(dd => dd.ConsentFormsModule )},
      {path: 'DataSecurity',loadChildren: () => import('./data-security/data-security.module').then(dd => dd.DataSecurityModule )},
      {path: 'ClinicalNotesCatalog',loadChildren: () => import('./clinical-notes-catalog/clinical-notes-catalog.module').then(dd => dd.ClinicalNotesCatalogModule )},
      {path: 'DrugCatalog',loadChildren: () => import('./drug-catalog/drug-catalog.module').then(dd => dd.DrugCatalogModule )},
      {path: 'ChartingTemplates',loadChildren: () => import('./charting-templates/charting-templates.module').then(dd => dd.ChartingTemplatesModule )},
      {path: 'Printouts',loadChildren: () => import('./printouts/printouts.module').then(dd => dd.PrintoutsModule )},
      {path: 'Emails',loadChildren: () => import('./emails/emails.module').then(dd => dd.EmailsModule )},
      {path: 'Billing',loadChildren: () => import('./billing/billing.module').then(dd => dd.BillingModule )},
      {path: 'PatientGroups',loadChildren: () => import('./patient-groups/patient-groups.module').then(dd => dd.PatientGroupsModule )},
      {path: 'ImportExport',loadChildren: () => import('./import-export/import-export.module').then(dd => dd.ImportExportModule )},
      {path: 'AutomaticIDGeneration',loadChildren: () => import('./automatic-idgeneration/automatic-idgeneration.module').then(dd => dd.AutomaticIDGenerationModule )},
      {path: 'Insurance',loadChildren: () => import('./insurance/insurance.module').then(dd => dd.InsuranceModule )},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
