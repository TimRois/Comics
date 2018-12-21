import { TestBed } from '@angular/core/testing';

import { AvailableReleaseService } from './available-release.service';

describe('AvailableReleaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailableReleaseService = TestBed.get(AvailableReleaseService);
    expect(service).toBeTruthy();
  });
});
