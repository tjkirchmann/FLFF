import { TestBed } from '@angular/core/testing';

import { RegisterProfileService } from './register-profile.service';

describe('RegisterProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterProfileService = TestBed.get(RegisterProfileService);
    expect(service).toBeTruthy();
  });
});
