import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.page.html',
  styleUrls: ['./book-flight.page.scss'],
})
export class BookFlightPage implements OnInit {

  tripType = 'oneway';
  classType= "economy"
  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  goBack() {
      this.navCtrl.back();
  }

  changeTrip(val) {
      this.tripType = val;
      console.log(this.tripType)
  }
  changeClass(val) {
      this.classType = val;
  }

  goToPlanTrip() {
      this.router.navigate(['/trip-plan']);
  }

}
