import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLeadComponent } from './add-lead/add-lead.component';

const routes: Routes = [
    {path:'Addlead',component:AddLeadComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsRoutingRoutingModule { }
