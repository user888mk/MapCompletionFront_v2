import { TestBed } from '@angular/core/testing';

import { AthleteStatsService } from './athlete-stats.service';

describe('AthleteStatsService', () => {
  let service: AthleteStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthleteStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
