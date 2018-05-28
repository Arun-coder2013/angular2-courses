import { TestBed, inject } from '@angular/core/testing';

import { MajhiServiceService } from './majhi-service.service';

describe('MajhiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajhiServiceService]
    });
  });

  it('should be created', inject([MajhiServiceService], (service: MajhiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
