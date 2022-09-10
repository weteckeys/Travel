import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  orderDetail = [
    {
      status : 1,
      time: '05:30',
      activity : 'Trekking',
      location : 'Lofoten',
      img : 'assets/imgs/surfer.png'
    },
    {
      status : 1,
      time: '07:00',
      activity : 'Breakfast',
      location : 'at the Hotel',
      img : 'assets/imgs/breakfast.png'
    },
    {
      status : 1,
      time: '08:30',
      activity : 'Surfing',
      location : 'on the Lake',
      img : 'assets/imgs/surfer.png'
    },
    {
      status : 0,
      time: '11:30',
      activity : 'Taking Some rest',
      location : 'at the Hotel',
      img : 'assets/imgs/bed.png'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
