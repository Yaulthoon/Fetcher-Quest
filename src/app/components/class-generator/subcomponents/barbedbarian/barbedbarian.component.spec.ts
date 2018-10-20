import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbedbarianComponent } from './barbedbarian.component';

describe('BarbedbarianComponent', () => {
  let component: BarbedbarianComponent;
  let fixture: ComponentFixture<BarbedbarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarbedbarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbedbarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
