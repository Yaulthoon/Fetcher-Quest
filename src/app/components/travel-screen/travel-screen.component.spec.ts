import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelScreenComponent } from './travel-screen.component';

describe('TravelScreenComponent', () => {
  let component: TravelScreenComponent;
  let fixture: ComponentFixture<TravelScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
