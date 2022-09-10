import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddHotelFlightPage } from './add-hotel-flight.page';

const routes: Routes = [
  {
    path: '',
    component: AddHotelFlightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddHotelFlightPageRoutingModule {}
