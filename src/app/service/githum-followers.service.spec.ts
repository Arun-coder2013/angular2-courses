import { TestBed, inject } from '@angular/core/testing';

import { GithumFollowersService } from './githum-followers.service';

describe('GithumFollowersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithumFollowersService]
    });
  });

  it('should be created', inject([GithumFollowersService], (service: GithumFollowersService) => {
    expect(service).toBeTruthy();
  }));
});
