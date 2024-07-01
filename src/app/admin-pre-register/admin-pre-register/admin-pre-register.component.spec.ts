import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPreRegisterComponent } from './admin-pre-register.component';

describe('AdminPreRegisterComponent', () => {
  let component: AdminPreRegisterComponent;
  let fixture: ComponentFixture<AdminPreRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPreRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPreRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
