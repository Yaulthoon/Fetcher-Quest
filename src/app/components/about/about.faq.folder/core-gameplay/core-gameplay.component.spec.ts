import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreGameplayComponent } from './core-gameplay.component';

describe('CoreGameplayComponent', () => {
  let component: CoreGameplayComponent;
  let fixture: ComponentFixture<CoreGameplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreGameplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreGameplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
