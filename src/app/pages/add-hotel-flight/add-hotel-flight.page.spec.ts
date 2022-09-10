import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddHotelFlightPage } from './add-hotel-flight.page';

describe('AddHotelFlightPage', () => {
  let component: AddHotelFlightPage;
  let fixture: ComponentFixture<AddHotelFlightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHotelFlightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddHotelFlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
