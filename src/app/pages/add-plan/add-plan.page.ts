import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';


@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.page.html',
  styleUrls: ['./add-plan.page.scss'],
})
export class AddPlanPage implements OnInit {

  dateRange: { from: string; to: string; };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAddDayPlan() {
      this.router.navigate(['/add-day-plan']);
  }

}
