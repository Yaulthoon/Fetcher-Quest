import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassGeneratorComponent } from './class-generator.component';

describe('ClassGeneratorComponent', () => {
  let component: ClassGeneratorComponent;
  let fixture: ComponentFixture<ClassGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
