import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaisyJaneComponent } from './daisy-jane.component';

describe('DaisyJaneComponent', () => {
  let component: DaisyJaneComponent;
  let fixture: ComponentFixture<DaisyJaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaisyJaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaisyJaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
