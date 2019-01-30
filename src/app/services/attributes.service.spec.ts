import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AttributesService } from './attributes.service';

describe('AttributesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AttributesService]
    });
  });

  it('should be created', inject([AttributesService], (service: AttributesService) => {
    expect(service).toBeTruthy();
  }));
});
