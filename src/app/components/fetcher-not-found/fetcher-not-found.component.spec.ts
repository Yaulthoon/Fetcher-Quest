import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetcherNotFoundComponent } from './fetcher-not-found.component';

describe('FetcherNotFoundComponent', () => {
  let component: FetcherNotFoundComponent;
  let fixture: ComponentFixture<FetcherNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetcherNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetcherNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
