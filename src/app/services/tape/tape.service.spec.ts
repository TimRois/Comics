import { TestBed } from '@angular/core/testing';

import { TapeService } from './tape.service';

describe('TapeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TapeService = TestBed.get(TapeService);
    expect(service).toBeTruthy();
  });
});
