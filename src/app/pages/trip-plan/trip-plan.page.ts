import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-plan',
  templateUrl: './trip-plan.page.html',
  styleUrls: ['./trip-plan.page.scss'],
})
export class TripPlanPage implements OnInit {

  rate = 4;
  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  goToBack() {
      this.navCtrl.back();
  }

  onRateChange(eve) {

  }

  goToHotelMap() {
      this.router.navigate(['/hotel-map']);
  }

  goToAddPlan() {
      this.router.navigate(['/add-plan']);
  }

  goToFlights() {
      this.router.navigate(['/flights']);
  }

}
