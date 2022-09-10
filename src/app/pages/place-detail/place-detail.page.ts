import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  rate = 4;
  constructor(private router: Router, private navCrtl: NavController) { }

  ngOnInit() {
  }

  onRateChange(eve) {
      console.log(eve);
  }

  goToPlanTrip() {
      this.router.navigate(['/trip-plan']);
  }

  goToBack() {
      this.navCrtl.back();
  }

}
