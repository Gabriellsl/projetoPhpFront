import { TestBed } from '@angular/core/testing';

import { AcaoService } from './transacao-deposito.service';

describe('AcaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcaoService = TestBed.get(AcaoService);
    expect(service).toBeTruthy();
  });
});