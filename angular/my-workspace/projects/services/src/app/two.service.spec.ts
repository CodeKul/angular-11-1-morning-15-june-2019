import { TestBed } from '@angular/core/testing';

import { TwoService } from './two.service';

describe('TwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwoService = TestBed.get(TwoService);
    expect(service).toBeTruthy();
  });
});
