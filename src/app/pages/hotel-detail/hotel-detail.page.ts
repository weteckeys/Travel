import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.page.html',
  styleUrls: ['./hotel-detail.page.scss'],
})
export class HotelDetailPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  goBack() {
      this.navCtrl.back();
  }

  goToHotelBook() {
      this.router.navigate(['/hotel-book']);
  }

}
