import { TestBed } from '@angular/core/testing';

import { PelucheService } from './peluche.service';

describe('TareaService', () => {
  let service: PelucheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PelucheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
