import { TestBed } from '@angular/core/testing';

import { PageNavigationServiceService } from './page-navigation-service.service';

describe('PageNavigationServiceService', () => {
  let service: PageNavigationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageNavigationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
