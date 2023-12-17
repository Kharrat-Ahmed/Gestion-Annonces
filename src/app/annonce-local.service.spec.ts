import { TestBed } from '@angular/core/testing';

import { AnnonceLocalService } from './annonce-local.service';

describe('AnnonceLocalService', () => {
  let service: AnnonceLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnonceLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
