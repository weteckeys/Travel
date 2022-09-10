import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-hotel-flight',
  templateUrl: './add-hotel-flight.page.html',
  styleUrls: ['./add-hotel-flight.page.scss'],
})
export class AddHotelFlightPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
      this.router.navigate(['/tabs/home']);
  }

}
