import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRefinersFireComponent } from './the-refiners-fire.component';

describe('TheRefinersFireComponent', () => {
  let component: TheRefinersFireComponent;
  let fixture: ComponentFixture<TheRefinersFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheRefinersFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheRefinersFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
