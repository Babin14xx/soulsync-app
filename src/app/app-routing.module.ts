import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddLeadComponent } from './leads/add-lead/add-lead.component';
import { LeadListComponent } from './leads/lead-list/lead-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'AddLead',
    component: AddLeadComponent,
    children: [
      { path: 'LeadList', component: LeadListComponent },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
