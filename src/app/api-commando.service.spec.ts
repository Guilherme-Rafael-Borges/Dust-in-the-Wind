import { TestBed } from '@angular/core/testing';

import { ApiCommandoService } from './api-commando.service';

describe('ApiCommandoService', () => {
  let service: ApiCommandoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCommandoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
