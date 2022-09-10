import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.page.html',
  styleUrls: ['./discount.page.scss'],
})
export class DiscountPage implements OnInit {

  constructor(private navCrtl: NavController) { }

  ngOnInit() {
  }

  goToBack() {
      this.navCrtl.back();
  }

}
