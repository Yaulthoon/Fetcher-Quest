import { TestBed } from '@angular/core/testing';

import { ActiveQuestService } from './active-quest.service';

describe('ActiveQuestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveQuestService = TestBed.get(ActiveQuestService);
    expect(service).toBeTruthy();
  });
});
