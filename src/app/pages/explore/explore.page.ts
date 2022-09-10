import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  sliderImg = [
      'assets/imgs/nature1.jpg',
      'assets/imgs/nature2.jpg',
      'assets/imgs/nature3.jpg',
      'assets/imgs/nature4.jpg',
      'assets/imgs/nature5.jpg',
  ];

  slideOpts = {
    slidesPerView: 1.5,
  };

  slideOpts2 = {
    slidesPerView: 2.5,
  };

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToPlaceDetail() {
      this.router.navigate(['/place-detail']);
  }

}
