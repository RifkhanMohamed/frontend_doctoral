import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalLabComponent } from './physical-lab.component';

describe('PhysicalLabComponent', () => {
  let component: PhysicalLabComponent;
  let fixture: ComponentFixture<PhysicalLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
