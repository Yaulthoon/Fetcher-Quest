import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LupinComponent } from './lupin.component';

describe('LupinComponent', () => {
  let component: LupinComponent;
  let fixture: ComponentFixture<LupinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LupinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LupinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
