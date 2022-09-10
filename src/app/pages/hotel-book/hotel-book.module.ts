import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelBookPageRoutingModule } from './hotel-book-routing.module';

import { HotelBookPage } from './hotel-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelBookPageRoutingModule
  ],
  declarations: [HotelBookPage]
})
export class HotelBookPageModule {}
