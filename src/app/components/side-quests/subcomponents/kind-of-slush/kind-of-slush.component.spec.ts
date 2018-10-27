import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindOfSlushComponent } from './kind-of-slush.component';

describe('KindOfSlushComponent', () => {
  let component: KindOfSlushComponent;
  let fixture: ComponentFixture<KindOfSlushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindOfSlushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindOfSlushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
