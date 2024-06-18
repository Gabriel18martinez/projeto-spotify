import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { UserAutenticatedGuard } from './user-autenticated.guard';

describe('userAutenticatedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => UserAutenticatedGuard (...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
