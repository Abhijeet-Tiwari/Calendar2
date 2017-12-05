import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartcalendarComponent } from './calendar.component';

describe('StartcalendarComponent', () => {
  let component: StartcalendarComponent;
  let fixture: ComponentFixture<StartcalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartcalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
