import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeTimezonePageRoutingModule } from './change-timezone-routing.module';

import { ChangeTimezonePage } from './change-timezone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeTimezonePageRoutingModule
  ],
  declarations: [ChangeTimezonePage]
})
export class ChangeTimezonePageModule {}
