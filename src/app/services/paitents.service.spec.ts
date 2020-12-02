import { TestBed } from '@angular/core/testing';

import { PaitentsService } from './paitents.service';

describe('PaitentsService', () => {
  let service: PaitentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaitentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
