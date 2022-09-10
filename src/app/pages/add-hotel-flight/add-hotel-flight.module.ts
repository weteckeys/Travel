import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddHotelFlightPageRoutingModule } from './add-hotel-flight-routing.module';

import { AddHotelFlightPage } from './add-hotel-flight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddHotelFlightPageRoutingModule
  ],
  declarations: [AddHotelFlightPage]
})
export class AddHotelFlightPageModule {}
