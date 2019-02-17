import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowGatherspotComponent } from './slow-gatherspot.component';

describe('SlowGatherspotComponent', () => {
  let component: SlowGatherspotComponent;
  let fixture: ComponentFixture<SlowGatherspotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlowGatherspotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowGatherspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
