import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TumblemancerComponent } from './tumblemancer.component';

describe('TumblemancerComponent', () => {
  let component: TumblemancerComponent;
  let fixture: ComponentFixture<TumblemancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TumblemancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TumblemancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
