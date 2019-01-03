import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniquestsComponent } from './miniquests.component';

describe('MiniquestsComponent', () => {
  let component: MiniquestsComponent;
  let fixture: ComponentFixture<MiniquestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniquestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniquestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
