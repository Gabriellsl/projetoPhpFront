import { TestBed } from '@angular/core/testing';

import { CruddefaultService } from './services/cruddefault.service';

describe('CruddefaultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CruddefaultService = TestBed.get(CruddefaultService);
    expect(service).toBeTruthy();
  });
});
