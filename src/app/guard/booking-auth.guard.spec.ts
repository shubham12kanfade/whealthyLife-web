import { TestBed } from '@angular/core/testing';

import { BookingAuthGuard } from './booking-auth.guard';

describe('BookingAuthGuard', () => {
  let guard: BookingAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookingAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
