import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetLupinFetcherComponent } from './meet-lupin-fetcher.component';

describe('MeetLupinFetcherComponent', () => {
  let component: MeetLupinFetcherComponent;
  let fixture: ComponentFixture<MeetLupinFetcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetLupinFetcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetLupinFetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
