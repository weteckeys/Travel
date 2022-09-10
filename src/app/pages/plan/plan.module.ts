import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanPageRoutingModule } from './plan-routing.module';

import { PlanPage } from './plan.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanPageRoutingModule,
    CalendarModule
  ],
  declarations: [PlanPage]
})
export class PlanPageModule {}
