import { TestBed } from '@angular/core/testing';

import { StravaLoginService } from './strava-login.service';

describe('StravaLoginService', () => {
  let service: StravaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StravaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
