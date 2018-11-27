import { TestBed } from '@angular/core/testing';

import { PessoaFormService } from './pessoa-form.service';

describe('PessoaFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PessoaFormService = TestBed.get(PessoaFormService);
    expect(service).toBeTruthy();
  });
});
