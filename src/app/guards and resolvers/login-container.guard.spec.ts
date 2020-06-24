import { TestBed } from '@angular/core/testing';

import { LoginContainerGuard } from './login-container.guard';

describe('LoginContainerGuard', () => {
  let guard: LoginContainerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginContainerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
