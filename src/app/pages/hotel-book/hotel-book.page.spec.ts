import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelBookPage } from './hotel-book.page';

describe('HotelBookPage', () => {
  let component: HotelBookPage;
  let fixture: ComponentFixture<HotelBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelBookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
