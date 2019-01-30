import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZealotComponent } from './zealot.component';

describe('ZealotComponent', () => {
  let component: ZealotComponent;
  let fixture: ComponentFixture<ZealotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZealotComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZealotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
