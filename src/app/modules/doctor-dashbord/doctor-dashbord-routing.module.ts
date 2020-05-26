import { ChangePasswordComponent } from './change-password/change-password.component';
import { DoctorDashbordComponent } from './doctor-dashbord.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: DoctorDashbordComponent, children: [
      { path: '', loadChildren: () => import('./dashbord-home/dashbord-home.module').then(dhm => dhm.DashbordHomeModule) },
      { path: 'Patients', loadChildren: () => import('./patients/patients.module').then(dhm => dhm.PatientsModule) },
      { path: 'Calendar', loadChildren: () => import('./calendar/calendar.module').then(dhm => dhm.CalendarModule) },
      { path: 'Communications', loadChildren: () => import('./communications/communications.module').then(dhm => dhm.CommunicationsModule) },
      { path: 'Reports', loadChildren: () => import('./reports/reports.module').then(dhm => dhm.ReportsModule) },
      { path: 'Settings', loadChildren: () => import('./settings/settings.module').then(dhm => dhm.SettingsModule) },
      { path: 'Integrations', loadChildren: () => import('./integrations/integrations.module').then(dhm => dhm.IntegrationsModule) },
      { path: 'Inventory', loadChildren: () => import('./inventory/inventory.module').then(dhm => dhm.InventoryModule) },
      { path: 'Expenses', loadChildren: () => import('./expenses/expenses.module').then(dhm => dhm.ExpensesModule) },
      { path: 'ActivityLog', loadChildren: () => import('./activity-log/activity-log.module').then(dhm => dhm.ActivityLogModule) },
      { path: 'Profile', loadChildren: () => import('./profile/profile.module').then(dhm => dhm.ProfileModule) },
      { path: 'Feedback', loadChildren: () => import('./feedback/feedback.module').then(dhm => dhm.FeedbackModule) },
      { path: 'Reach', loadChildren: () => import('./reach/reach.module').then(dhm => dhm.ReachModule) },
      { path: 'HealthFeed', loadChildren: () => import('./health-feed/health-feed.module').then(dhm => dhm.HealthFeedModule) },
      { path: 'change_password', component: ChangePasswordComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorDashbordRoutingModule { }
