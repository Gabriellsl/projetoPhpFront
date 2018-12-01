import { TestBed } from '@angular/core/testing';

import { MinhasacoesService } from './services/minhasacoes.service';

describe('MinhasacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinhasacoesService = TestBed.get(MinhasacoesService);
    expect(service).toBeTruthy();
  });
});
