import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeanComponent } from './admin-dean.component';

describe('AdminDeanComponent', () => {
  let component: AdminDeanComponent;
  let fixture: ComponentFixture<AdminDeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
