import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLabManagerComponent } from './admin-lab-manager.component';

describe('AdminLabManagerComponent', () => {
  let component: AdminLabManagerComponent;
  let fixture: ComponentFixture<AdminLabManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLabManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLabManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
