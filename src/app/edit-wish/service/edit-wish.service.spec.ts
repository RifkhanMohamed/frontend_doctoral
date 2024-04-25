import { TestBed } from '@angular/core/testing';

import { EditWishService } from './edit-wish.service';

describe('EditWishService', () => {
  let service: EditWishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditWishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
