import { TestBed } from '@angular/core/testing';

import { AthleteInfoService } from './athlete-info.service';

describe('AthleteInfoService', () => {
  let service: AthleteInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthleteInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
