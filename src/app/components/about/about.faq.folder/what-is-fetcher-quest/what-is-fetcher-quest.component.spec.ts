import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsFetcherQuestComponent } from './what-is-fetcher-quest.component';

describe('WhatIsFetcherQuestComponent', () => {
  let component: WhatIsFetcherQuestComponent;
  let fixture: ComponentFixture<WhatIsFetcherQuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsFetcherQuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsFetcherQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
