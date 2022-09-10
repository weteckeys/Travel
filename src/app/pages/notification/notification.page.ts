import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notifications = [
      {
          name : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          img : 'assets/imgs/sun.png',
          date : '12/03/2021'
      },
      {
          name : 'Aperiam neque incidunt tempora facere consequuntur magnam optio odit iusto tenetur',
          img : 'assets/imgs/surfer.png',
          date : '07/03/2021'
      },
      {
          name : 'Ab porro a distinctio debitis ullam pariatur sequi nesciunt quis laudantium',
          img : 'assets/imgs/cloudy.png',
          date : '02/03/2021'
      },
      {
          name : 'Alias praesentium, cumque earum iure eaque delectus accusamus sequi',
          img : 'assets/imgs/breakfast.png',
          date : '12/02/2021'
      },  
  ]
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
        this.navCtrl.back();
  }

}
