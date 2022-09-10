import { ChangeTimezonePage } from './../change-timezone/change-timezone.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    constructor(private router: Router, private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    goToDiscount() {
        this.router.navigate(['/discount']);
    }

    goToEditProfile() {
        this.router.navigate(['/edit-profile']);
    }

    goToCards() {
        this.router.navigate(['/card-list']);
    }

    goToNotification() {
        this.router.navigate(['/notification']);
    }

    async goToTimezone() {
        const modal = await this.modalCtrl.create({
            component: ChangeTimezonePage,
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }

    logout() {
        this.router.navigate(['/']);
    }   

    

  

}
