import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDirectorFinalValidationComponent } from './admin-director-final-validation.component';

describe('AdminDeanFinalValidationComponent', () => {
  let component: AdminDirectorFinalValidationComponent;
  let fixture: ComponentFixture<AdminDirectorFinalValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDirectorFinalValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDirectorFinalValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
