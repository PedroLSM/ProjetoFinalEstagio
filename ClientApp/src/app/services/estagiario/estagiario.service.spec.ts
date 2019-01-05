import { TestBed } from '@angular/core/testing';

import { EstagiarioService } from './estagiario.service';

describe('EstagiarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstagiarioService = TestBed.get(EstagiarioService);
    expect(service).toBeTruthy();
  });
});
