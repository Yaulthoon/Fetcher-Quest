import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlltimedTenureComponent } from './illtimed-tenure.component';

describe('IlltimedTenureComponent', () => {
  let component: IlltimedTenureComponent;
  let fixture: ComponentFixture<IlltimedTenureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlltimedTenureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlltimedTenureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
