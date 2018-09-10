import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideQuestsComponent } from './side-quests.component';

describe('SideQuestsComponent', () => {
  let component: SideQuestsComponent;
  let fixture: ComponentFixture<SideQuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideQuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideQuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
