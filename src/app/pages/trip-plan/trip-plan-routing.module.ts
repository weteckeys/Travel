import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripPlanPage } from './trip-plan.page';

const routes: Routes = [
  {
    path: '',
    component: TripPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripPlanPageRoutingModule {}
