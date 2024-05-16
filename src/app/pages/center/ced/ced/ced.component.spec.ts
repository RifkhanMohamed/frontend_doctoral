import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedComponent } from './ced.component';

describe('CedComponent', () => {
  let component: CedComponent;
  let fixture: ComponentFixture<CedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
