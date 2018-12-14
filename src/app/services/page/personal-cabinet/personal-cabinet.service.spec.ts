import { TestBed } from '@angular/core/testing';

import { PersonalCabinetService } from './personal-cabinet.service';

describe('PersonalCabinetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalCabinetService = TestBed.get(PersonalCabinetService);
    expect(service).toBeTruthy();
  });
});
