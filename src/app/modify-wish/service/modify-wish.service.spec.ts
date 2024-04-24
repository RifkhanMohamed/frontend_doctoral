import { TestBed } from '@angular/core/testing';

import { ModifyWishService } from './modify-wish.service';

describe('ModifyWishService', () => {
  let service: ModifyWishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyWishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
