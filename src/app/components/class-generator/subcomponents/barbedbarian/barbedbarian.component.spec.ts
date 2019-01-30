import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BarbedbarianComponent } from './barbedbarian.component';
import { AttributesService } from '../../../../services/attributes.service';

describe('BarbedbarianComponent', () => {
  let component: BarbedbarianComponent;
  let fixture: ComponentFixture<BarbedbarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AttributesService],
      declarations: [BarbedbarianComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbedbarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*  it('should create', () => {
      expect(component).toBeTruthy();
    }); */
});
