import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-book',
  templateUrl: './hotel-book.page.html',
  styleUrls: ['./hotel-book.page.scss'],
})
export class HotelBookPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  goBack() {
      this.navCtrl.back();
  }

  goToPlanTrip() {
      this.router.navigate(['/trip-plan']);
  }

}
