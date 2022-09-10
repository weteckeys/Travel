import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeTimezonePage } from './change-timezone.page';

describe('ChangeTimezonePage', () => {
  let component: ChangeTimezonePage;
  let fixture: ComponentFixture<ChangeTimezonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTimezonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeTimezonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
