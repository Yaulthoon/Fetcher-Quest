import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowLuckyYouComponent } from './slow-lucky-you.component';

describe('SlowLuckyYouComponent', () => {
  let component: SlowLuckyYouComponent;
  let fixture: ComponentFixture<SlowLuckyYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlowLuckyYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowLuckyYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
