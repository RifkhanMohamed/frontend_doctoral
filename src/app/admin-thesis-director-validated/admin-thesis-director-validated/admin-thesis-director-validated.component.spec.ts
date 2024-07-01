import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminThesisDirectorValidatedComponent } from './admin-thesis-director-validated.component';

describe('AdminThesisDirectorValidatedComponent', () => {
  let component: AdminThesisDirectorValidatedComponent;
  let fixture: ComponentFixture<AdminThesisDirectorValidatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminThesisDirectorValidatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminThesisDirectorValidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
