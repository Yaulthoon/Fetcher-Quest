import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MiniquestsComponent } from './miniquests.component';

describe('MiniquestsComponent', () => {
  let component: MiniquestsComponent;
  let fixture: ComponentFixture<MiniquestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MiniquestsComponent],
      entryComponents: [
        RealBeggarComponent, ForestShortcutComponent, ShopScreenComponent,
        CampsiteSoloComponent, WellfareComponent, HighLowComponent,
        StormBrewingComponent, RiverCrossingComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniquestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*  it('should create', () => {
      expect(component).toBeTruthy();
    }); */
});
