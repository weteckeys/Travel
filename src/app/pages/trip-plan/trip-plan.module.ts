import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripPlanPageRoutingModule } from './trip-plan-routing.module';

import { TripPlanPage } from './trip-plan.page';
import { IonicRatingModule } from 'ionic-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    TripPlanPageRoutingModule
  ],
  declarations: [TripPlanPage]
})
export class TripPlanPageModule {}
