import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagonWoesComponent } from './wagon-woes.component';

describe('WagonWoesComponent', () => {
  let component: WagonWoesComponent;
  let fixture: ComponentFixture<WagonWoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagonWoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagonWoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
