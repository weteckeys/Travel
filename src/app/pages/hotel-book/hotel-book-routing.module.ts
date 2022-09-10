import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelBookPage } from './hotel-book.page';

const routes: Routes = [
  {
    path: '',
    component: HotelBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelBookPageRoutingModule {}
