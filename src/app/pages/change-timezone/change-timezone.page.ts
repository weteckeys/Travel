import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-change-timezone',
  templateUrl: './change-timezone.page.html',
  styleUrls: ['./change-timezone.page.scss'],
})
export class ChangeTimezonePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
      this.modalCtrl.dismiss();
  }

}
