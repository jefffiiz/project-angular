import { TestBed, async, inject } from '@angular/core/testing';

import { UnauthenGuard } from './unauthen.guard';

describe('UnauthenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnauthenGuard]
    });
  });

  it('should ...', inject([UnauthenGuard], (guard: UnauthenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
