import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelMapPageRoutingModule } from './hotel-map-routing.module';

import { HotelMapPage } from './hotel-map.page';
import { IonicRatingModule } from 'ionic-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    HotelMapPageRoutingModule
  ],
  declarations: [HotelMapPage]
})
export class HotelMapPageModule {}
