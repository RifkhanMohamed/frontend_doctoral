import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyWishComponent } from './modify-wish.component';

describe('ModifyWishComponent', () => {
  let component: ModifyWishComponent;
  let fixture: ComponentFixture<ModifyWishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyWishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
