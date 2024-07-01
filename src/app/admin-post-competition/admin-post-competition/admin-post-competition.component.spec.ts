import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostCompetitionComponent } from './admin-post-competition.component';

describe('AdminPostCompetitionComponent', () => {
  let component: AdminPostCompetitionComponent;
  let fixture: ComponentFixture<AdminPostCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostCompetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
