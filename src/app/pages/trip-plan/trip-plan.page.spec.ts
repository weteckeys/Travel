import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripPlanPage } from './trip-plan.page';

describe('TripPlanPage', () => {
  let component: TripPlanPage;
  let fixture: ComponentFixture<TripPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TripPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
