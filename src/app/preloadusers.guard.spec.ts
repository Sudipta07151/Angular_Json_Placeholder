import { TestBed } from '@angular/core/testing';

import { PreloadusersGuard } from './preloadusers.guard';

describe('PreloadusersGuard', () => {
  let guard: PreloadusersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreloadusersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
