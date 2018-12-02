import { TestBed } from '@angular/core/testing';

import { AutoService } from './auto.service';

describe('AutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoService = TestBed.get(AutoService);
    expect(service).toBeTruthy();
  });
});
