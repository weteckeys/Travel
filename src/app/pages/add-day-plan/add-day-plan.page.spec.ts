import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDayPlanPage } from './add-day-plan.page';

describe('AddDayPlanPage', () => {
  let component: AddDayPlanPage;
  let fixture: ComponentFixture<AddDayPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDayPlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDayPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
