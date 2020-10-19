import { TestBed } from '@angular/core/testing';

import { MyclinicService } from './myclinic.service';

describe('MyclinicService', () => {
  let service: MyclinicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyclinicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
