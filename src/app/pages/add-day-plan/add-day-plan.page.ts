import { AddActivityPage } from './../add-activity/add-activity.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-day-plan',
  templateUrl: './add-day-plan.page.html',
  styleUrls: ['./add-day-plan.page.scss'],
})
export class AddDayPlanPage implements OnInit {

  activity = [
      {
          time : '05:30',
          name : 'Wake up',
          img : 'assets/imgs/bed.png',
      },
      {
          time : '06:00',
          name : 'Breakfast',
          img : 'assets/imgs/breakfast.png',
      },
      {
          time : '07:00',
          name : 'Surfing',
          img : 'assets/imgs/surfer.png',
      },
      {
        time : '09:30',
        name : 'Sunbathing',
        img : 'assets/imgs/sunny.png',
      },
  ];

  tabID = 1;

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  goToHotelFlight() {
      this.router.navigate(['/add-hotel-flight']);
  }

  async goToAddActivity() {
    const modal = await this.modalCtrl.create({
      component: AddActivityPage,
        cssClass: 'custom-modal'
    });
    return await modal.present();
  }

}
