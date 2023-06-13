import { TestBed } from '@angular/core/testing';

import { MusicianGuard } from './musician.guard';

describe('MusicianGuard', () => {
  let guard: MusicianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MusicianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
