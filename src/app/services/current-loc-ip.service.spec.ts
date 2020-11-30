import { TestBed } from '@angular/core/testing';

import { CurrentLocIpService } from './current-loc-ip.service';

describe('CurrentLocIpService', () => {
  let service: CurrentLocIpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentLocIpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
