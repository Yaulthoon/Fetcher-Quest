import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NthTwentyOneComponent } from './nth-twenty-one.component';

describe('NthTwentyOneComponent', () => {
  let component: NthTwentyOneComponent;
  let fixture: ComponentFixture<NthTwentyOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NthTwentyOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NthTwentyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
