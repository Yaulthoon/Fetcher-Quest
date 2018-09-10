import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicSquareComponent } from './magic-square.component';

describe('MagicSquareComponent', () => {
  let component: MagicSquareComponent;
  let fixture: ComponentFixture<MagicSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
