import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsLabComponent } from './maths-lab.component';

describe('MathsLabComponent', () => {
  let component: MathsLabComponent;
  let fixture: ComponentFixture<MathsLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathsLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathsLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
