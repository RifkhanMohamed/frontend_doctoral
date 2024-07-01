import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPreSelectedComponent } from './admin-pre-selected.component';

describe('AdminPreSelectedComponent', () => {
  let component: AdminPreSelectedComponent;
  let fixture: ComponentFixture<AdminPreSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPreSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPreSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
