import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ important
import { SharedModule } from '../shared/shared.module';
import { LeadsRoutingRoutingModule } from './leads-routing-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsModule ,
    SharedModule,
    LeadsRoutingRoutingModule
        // ✅ must include this

    
  ]
})
export class LeadsModule { }
